import { Component, OnInit } from '@angular/core';
import {ShareServiceService} from "../../share-service.service";

@Component({
  selector: 'app-create-contract-detail',
  templateUrl: './create-contract-detail.component.html',
  styleUrls: ['./create-contract-detail.component.css']
})
export class CreateContractDetailComponent implements OnInit {

  constructor(private shareService: ShareServiceService) { }

  ngOnInit(): void {
    this.shareService.placeholderSearch = 'Search id contract';
  }

}
