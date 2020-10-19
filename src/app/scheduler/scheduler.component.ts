import { INITIAL_EVENTS, createEventId } from './../shared/models/event-utils';
import { AddProjetComponent } from './../dialog/add-projet/add-projet.component';
import { IEventData } from './../shared/interfaces/event';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { Calendar } from '@fullcalendar/core';

@Component({
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  isChecked = false;
  slotDuration = '30';
  calendarVisible = true;
  selectedDate = new Date();
  @ViewChild('customCalendar', {static: false}) calendarComponent: FullCalendarComponent;

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today myCustomButton',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    customButtons: {
      myCustomButton: {
        text: 'calendrier',
        click: function() {
          const picker = document.getElementById('datePicker');
          picker.click();
        }
      }
    },
    locale: 'fr', // passage du calendrier en locale Française
    firstDay: 1,  // jour de départ du calendrier
    slotMinTime: '07:00', // heure de départ du scheduler
    slotMaxTime: '20:00', // heure de fin du scheduler
    businessHours: {
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [ 1, 2, 3, 4, 5 ], // Monday - Thursday
      startTime: '08:00', // a start time (10am in this example)
      endTime: '19:00', // an end time (6pm in this example)
    },
    //header: false,
    initialView: 'timeGridWeek',
    initialEvents: INITIAL_EVENTS, // Evt présents par défaut dans le scheduler
    weekends: false,  // afficher les weekends par défaut
    editable: true, // autoriser le déplacement des evts
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    droppable: true,  // autoriser le drag and drop d'evt externes
    slotEventOverlap: false,  // autoriser chevauchement des evt
    allDaySlot: false,  // zone résumé de la journée en haut du calendrier
    displayEventTime: false,  // afficher l'heure de début et fin de l'evt
    /*aspectRatio: 0.4,
    height: 700,*/
    slotDuration: '00:30:00', // durée d'un evt par défaut = '00:30:00' (30 minutes)
    //slotMaxTime: '12:00:00',
    slotLabelFormat: {  // format de la colonne des heures
      hour: 'numeric',
      minute: '2-digit',
      omitZeroMinute: false,
      meridiem: true,
      hour12: false // format 24h
    },
    slotLabelClassNames: 'slotLabel', // classe css pour la colonne des heures
    plugins: [ interactionPlugin ],
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    views: {
      timeGridWeek: { // name of view
        //titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
        // other view-specific options here
      }
    },
    /*views: {
      agendaWeek: {
          allDaySlot: false,
          slotLabelInterval: { hours: 6},
          slotDuration: { hours: 1},
          duration: { days: 7}
      }
    },*/
    eventColor: 'transparent',  // couleur globale de l'evt ! Si on souhaite customiser la tuile (ex border radius etc...) il est préférable
                                //de gérer la couleur de fond directement dans le css plutôt qu'ici sinon on a un double background
    eventBackgroundColor: '', // couleur de fond de l'evt. Idem ci-dessus, si on veut customiser un peu plus il est préférable de le gérer dans le css
    eventTextColor: '#56686D', // couleur du texte de l'evt
    eventBorderColor: '', // couleur du contour de l'evt
    eventContent: (arg) => {
      return this.buildEventTile(arg);
    },
    eventClassNames: ['fc-event-title-container']
    //hiddenDays: [ 2, 4 ] // Masquer des jours : Tuesdays and Thursdays
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  constructor(private cdRef: ChangeDetectorRef,
              public dialog: MatDialog) {
      const name = Calendar.name;
  }

  ngAfterViewInit() {
    // Activation du mode drag and drop sur tous les items enfants du side menu
    const draggableParent = document.querySelectorAll('#dnd');

    // parcours de chaque enfant
    this.elementChildren(draggableParent)
    .then((children: HTMLCollection) => {
      for (let i = 0; i < children.length; i++) {
        let draggableElt = document.getElementById(children[i].id);
        new Draggable(draggableElt);
      }
    });
  }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  /**
   * Renvoyer tous les éléments enfants de la div parent passée en paramètre
   * @param parent : div parent
   */
  async elementChildren(parent) {
    return new Promise((resolve, reject) => {
      resolve(parent[0].children);
    });
  }

  /**
   * Construction custom du contenu des tuiles event
   * pour permettre l'affichage d'informations complémentaires
   * @param arg
   */
  buildEventTile(arg: any) {
    // création du DOM
    let eventDiv = document.createElement('div');
    let titleEl = document.createElement('b');
    let infoEl = document.createElement('i');

    // ajout des styles
    eventDiv.classList.add('fc-event-info');
    titleEl.classList.add('fc-event-title');

    titleEl.innerHTML = arg.event.title;
    // Ajout des infos complémentaires si existantes
    if (arg.event.extendedProps.client) {
      infoEl.innerHTML = '<br>' + arg.event.extendedProps.client;
    }

    eventDiv.appendChild(titleEl);
    eventDiv.appendChild(infoEl);
    let arrayOfDomNodes = [ eventDiv ];
    return { domNodes: arrayOfDomNodes };
  }

  /**
   * Fonction déclenchée lors d'un changement de date dans le popup calendrier
   * @param type
   * @param event
   */
  changeDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = new Date(event.value);  // date sélectionnée
    const calendarApi = this.calendarComponent.getApi();  // récupérer l'objet api du composant calendar
    calendarApi.gotoDate(this.selectedDate);  // naviguer à la date sélectionnée
  }

  /**
   * Masquer le calendrier
   */
  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  /**
   * Afficher les jours ouvrés
   */
  handleWeekendsToggle(showWeekend: boolean = false) {
    const { calendarOptions } = this;
    //calendarOptions.weekends = !calendarOptions.weekends;
    calendarOptions.weekends = showWeekend;
  }

  /**
   * Clic sur un événement
   * @param clickInfo
   */
  handleEventClick(clickInfo: EventClickArg) {
    // Par défaut propose la suppression
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  /**
   * Clic sur une période du calendrier et déclencher la popup de création d'événement
   * @param selectInfo : date sélectionnée
   */
  handleDateSelect(selectInfo: DateSelectArg) {
    const calendarApi = selectInfo.view.calendar;
    const dialogRef = this.dialog.open(AddProjetComponent, {
      width: '450px',
      height: '800px'
    });

    // Traitement après fermeture de la modale
    dialogRef.afterClosed().subscribe(result => {
      const newEvent = result as IEventData;

      if (newEvent) {
        // calcul de l'heure de fin en fonction du paramètre 'duration' de l'item
        const endEvent = this.addMinutes(new Date(selectInfo.startStr), newEvent.duration);
        console.log(JSON.stringify(newEvent));
        // Création du nouvel événement
        calendarApi.addEvent({
          id: createEventId(),  // id auto
          title: newEvent.title,
          start: selectInfo.startStr,
          end: endEvent,//selectInfo.endStr,
          allDay: selectInfo.allDay,  // ajouter l'evt dans le résumé du jour
          extendedProps: newEvent.extendedProps,
          classNames: ['myEvent'],  // ne fonctionne pas
        });
      }
    });
  }

  /**
   * Calcul de la date de fin en fonction de la date de début et
   * du nombre de minutes à ajouter
   * @param dt : date de début
   * @param min : nombre de minutes à ajouter
   */
  addMinutes(dt: Date, min: number) {
    return new Date(dt.getTime() + min * 60000);  // ajout minutes
    //return new Date(dt.getTime() + (min * 60 * 60 * 1000)); // ajout heure
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  /**
   * Changer la granularité de la grille
   */
  onChangeSlotDuration(duration: string = '30') {
    this.calendarOptions.slotDuration = `00:${duration}:00`;
  }

}
