import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'customer', redirectTo: 'customer/list', pathMatch: 'full'},
  {path: 'customer/list', component: ListCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
];

@NgModule({
  declarations: [
    CreateCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
