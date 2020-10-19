import { LoginComponent } from './login/login.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'scheduler',
    pathMatch: 'full'
  },
  {
    component: LoginComponent,
    path: 'login',
  },
  {
    component: SchedulerComponent,
    path: 'scheduler'
  },
  {
      redirectTo: 'login',
      path: '**'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
