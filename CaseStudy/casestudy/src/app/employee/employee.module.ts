import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListEmployeeComponent} from "./list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";

const routes: Routes = [
  {path: 'employee', redirectTo: 'employee/list', pathMatch: 'full'},
  {path: 'employee/list', component: ListEmployeeComponent},
  {path: 'employee/create', component: CreateEmployeeComponent},
];

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
