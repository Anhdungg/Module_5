import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListServiceComponent} from "./list-service/list-service.component";
import {CreateServiceComponent} from "./create-service/create-service.component";
import {RegisterServiceComponent} from "./register-service/register-service.component";

const routes: Routes = [
  {path: 'service', redirectTo: 'service/list', pathMatch: 'full'},
  {path: 'service/list', component: ListServiceComponent},
  {path: 'service/create', component: CreateServiceComponent},
  {path: 'service/register', component: RegisterServiceComponent},
];

@NgModule({
  declarations: [
    ListServiceComponent,
    CreateServiceComponent,
    RegisterServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServiceModule { }
