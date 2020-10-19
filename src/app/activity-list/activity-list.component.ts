import { SampleService } from './../shared/services/sample.service';
import { IEventData } from './../shared/interfaces/event';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  @Input() data: IEventData[] = [];
  //events: IEventData[] = [];
  constructor(private dataService: SampleService) { }

  ngOnInit(): void {
    // Initialisation des codes projets disponibles dans favoris
    // TODO : initialiser à partir des données des web services
    this.data = this.dataService.quickEvents;
  }

}
