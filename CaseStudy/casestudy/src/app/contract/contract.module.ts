import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListContractComponent} from "./list-contract/list-contract.component";
import {CreateContractComponent} from "./create-contract/create-contract.component";
import {CreateContractDetailComponent} from "./create-contract-detail/create-contract-detail.component";

const routes: Routes = [
  {path: 'contract', redirectTo: 'contract/list', pathMatch: 'full'},
  {path: 'contract/list', component: ListContractComponent},
  {path: 'contract/create', component: CreateContractComponent},
  {path: 'contract/create-detail', component: CreateContractDetailComponent},
];

@NgModule({
  declarations: [
    ListContractComponent,
    CreateContractComponent,
    CreateContractDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContractModule { }
