import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: "employee-list", component: EmployeeListComponent },
  { path: "add-employee", component: AddEmployeeComponent },
  { path: "update-employee/:id", component: UpdateEmployeeComponent},
  { path: "**", redirectTo: "employee-list" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
