import { FullCalendarModule } from '@fullcalendar/angular';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { AppMaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AddProjetComponent } from './dialog/add-projet/add-projet.component';
import { CodeItemComponent } from './code-item/code-item.component';
import { HttpClientModule } from '@angular/common/http';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    LoginComponent,
    SideMenuComponent,
    AddProjetComponent,
    CodeItemComponent,
    ActivityListComponent
  ],
  entryComponents: [AddProjetComponent],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
