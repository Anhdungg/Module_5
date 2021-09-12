import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {
  ConfirmDelete,
  CustomerDetail,
  ListCustomerComponent, ModalStatus
} from "./list-customer/list-customer.component";
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import {NgxPaginationModule} from "ngx-pagination";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

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
    EditCustomerComponent,
    CustomerDetail,
    ConfirmDelete,
    ModalStatus
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        NgxPaginationModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class CustomerModule { }
