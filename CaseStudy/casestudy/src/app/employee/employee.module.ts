import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListEmployeeComponent} from "./list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

const routes: Routes = [
  {path: 'employee', redirectTo: 'employee/list', pathMatch: 'full'},
  {path: 'employee/list', component: ListEmployeeComponent},
  {path: 'employee/create', component: CreateEmployeeComponent},
  {path: 'employee/delete', component: DeleteEmployeeComponent},
  {path: 'employee/edit', component: EditEmployeeComponent},
];

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
