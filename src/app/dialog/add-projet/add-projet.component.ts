import { SampleService } from './../../shared/services/sample.service';
import { IEventData } from './../../shared/interfaces/event';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  quickEvents: IEventData[] = [];
  advancedEvents: IEventData[] = [];

  constructor(
    private dataService: SampleService,
    public dialogRef: MatDialogRef<AddProjetComponent>) {}

  ngOnInit(): void {
    // Initialisation des listes de codes projet : TODO à récupérer depuis les webservices
    this.quickEvents = this.dataService.quickEvents;
    this.advancedEvents = this.dataService.advancedEvents;
  }
  onClickItem(ev) { this.dialogRef.close(ev); }
  onNoClick(): void { this.dialogRef.close(); }
}
