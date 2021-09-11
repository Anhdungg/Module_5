import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: 'customer', redirectTo: 'customer/list', pathMatch: 'full'},
  {path: 'customer/list', component: ListCustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'customer/delete', component: DeleteCustomerComponent},
  {path: 'customer/edit', component: EditCustomerComponent},
];

@NgModule({
  declarations: [
    CreateCustomerComponent,
    ListCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
