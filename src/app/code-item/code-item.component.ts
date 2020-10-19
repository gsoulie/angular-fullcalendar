import { IEventData } from './../shared/interfaces/event';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-item',
  templateUrl: './code-item.component.html',
  styleUrls: ['./code-item.component.css']
})
export class CodeItemComponent implements OnInit {

  @Input() event: IEventData;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Ajout de l'attribut 'data-event' sur chaque item
    // nécessaire pour que le calendrier récupère les infos de l'élément droppé
    let draggableElt = document.getElementById(this.event.id);
    draggableElt.setAttribute('data-event', this.event.data);
  }
}
