import { RouteuardService } from './service/routeguard.service';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { LogoutComponent } from './logout/logout.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', component: LoginComponent },//canActivate, RouteGuardService
  { path: 'login', component: LoginComponent },
  { path: 'wellcome/:name', component: WellcomeComponent, canActivate: [RouteuardService] },
  { path: 'employee-list', component: EmployeeListComponent, canActivate: [RouteuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteuardService] },
  { path: 'employee-edit/:id', component: EmployeeEditComponent, canActivate: [RouteuardService] },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
