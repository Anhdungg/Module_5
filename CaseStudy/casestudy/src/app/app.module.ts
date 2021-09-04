import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {EmployeeModule} from "./employee/employee.module";
import {CustomerModule} from "./customer/customer.module";
import {ServiceModule} from "./service/service.module";
import {ContractModule} from "./contract/contract.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    CustomerModule,
    ServiceModule,
    ContractModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
