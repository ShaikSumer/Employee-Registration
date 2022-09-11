import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';

const routes: Routes = [{path: 'employeeRegistration', component:EmployeeRegistrationComponent},{path: 'employeeList', pathMatch:'full', component: EmployeeListComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//  routes(){employeList :  EmployeeListComponent}
export class AppRoutingModule { }
