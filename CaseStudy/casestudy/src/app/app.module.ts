import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { CreateContractDetailComponent } from './create-contract-detail/create-contract-detail.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { RegisterServiceComponent } from './register-service/register-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    CreateCustomerComponent,
    CreateServiceComponent,
    CreateContractComponent,
    CreateContractDetailComponent,
    ListCustomerComponent,
    ListEmployeeComponent,
    ListServiceComponent,
    ListContractComponent,
    RegisterServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
