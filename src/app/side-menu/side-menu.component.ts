import { environment } from 'src/environments/environment';
import { SampleService } from './../shared/services/sample.service';
import { IEventData } from './../shared/interfaces/event';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  slotDuration = '30';
  @Output() handleWeekend = new EventEmitter();
  @Output() handleSlotDuration = new EventEmitter();
  showWeekends = false;
  favoris: IEventData[] = [];
  recents: IEventData[] = [];

  constructor(private dataService: SampleService) { }

  ngOnInit(): void {
    // APPEL SERVICE et peupler favoris et recents
  }

  handleWeekendsToggle() {
    this.showWeekends = !this.showWeekends;
    this.handleWeekend.emit(this.showWeekends);
  }

  onChangeSlotDuration() {
    this.handleSlotDuration.emit(this.slotDuration);
  }

}
