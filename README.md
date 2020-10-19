# Angular Fullcalendar Demo

## Installation

[Documentation](https://fullcalendar.io/docs/angular)       

During the installation, it's possible to import specific calendar's modules. As example, here we import core, daygrid, timegrid, list and interaction :

````
npm install --save @fullcalendar/core @fullcalendar/angular @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list @fullcalendar/interaction
````

> Warning : The import line ````import { FullCalendarModule } from '@fullcalendar/angular';```` **MUST** be the very first line in *app.module.ts*

If not, the following error may occurs :

````
vdom.js:3 Uncaught Error: Please import the top-level full calendar lib before attempting to import a plugin.
    at Module../node_modules/@fullcalendar/common/vdom.js (vdom.js:3)
    at __webpack_require__ (bootstrap:79)
    at Module../node_modules/@fullcalendar/common/main.js (main.js:1)
    at __webpack_require__ (bootstrap:79)
    at Module../node_modules/@fullcalendar/daygrid/main.js (main.js:1)
    at __webpack_require__ (bootstrap:79)
    at Module../src/app/demo/demo.component.ts (demo.component.ts:1)
    at __webpack_require__ (bootstrap:79)
    at Module../src/app/Modules/app-routing.module.ts (app-routing.module.ts:1)
    at __webpack_require__ (bootstrap:79)
````

## Calendar's options

| option | description |
| -------- | ------------- |
| headerToolbar | defines the buttons and title at the top of the calendar |
| customButtons | defines custom buttons that can be used in the headerToolbar/footerToolbar |
| eventOverlap | determines if events being dragged and resized are allowed to overlap each other |
| locale | define calendar locale (ex 'fr', 'en') |
| firstDay | calendar's starting day |
| slotMinTime | starting hour of calendar (ex: '07:00') |
| slotMaxTime | ending hour of calendar |
| initialView | initial calendar type of view (ex: 'timeGriddWeek') |
| weekends | show / hide weekend by default |
| editable | allow event modification |
| selectable | allow event selection |
| selectMirror | show event shadow when dragging it |
| dayMaxEvents | The max number of events within a given day |
| droppable | allow external event drag and drop |
| slotEventOverlap | determines if timed events in TimeGrid view should visually overlap |
| allDaySlot | show / hide summary area on the top of the calendar |
| displayEventTime | show / hide the starting and ending hour of event |
| slotDuration | default event duration (ex: '00:30:00') |
| slotMaxTime | event max duration |
| slotLabelFormat | hours column format |
| slotLabelClassNames | array of css classname for slotLabel column |
| plugins | array of calendar's modules |
| eventColor | default event color |
| eventBackgroundColor | default event background color |
| eventBorderColor | default event border color |
| eventTextColor | default event text color |
| eventContent | callback for event building. You can specify css rules inside the callback |
| eventClassNames | array of css class |
| hiddenDays | array of days to hide (ex: [2, 4] will hide Tuesday ans Thursday |
| eventAdd | you can update a remote database when this fire |
| eventChange | you can update a remote database when this fire |
| eventRemove | you can update a remote database when this fire |

### Example 

````

@ViewChild('customCalendar', { static: false }) calendarComponent: FullCalendarComponent;

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
    eventOverlap: false,  // activer / désactiver la possibilité de superposer des événements
                          // ATTENTION si un événement de type background est déclaré (ex coloriser la pause de 12h-14h) alors
                          // le calendar considère que c'est un chevauchement et empêchera la création d'un événement sur ce créneau 
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
    let arrayOfDomNodes = [eventDiv];
    return { domNodes: arrayOfDomNodes };
  }
  ````
