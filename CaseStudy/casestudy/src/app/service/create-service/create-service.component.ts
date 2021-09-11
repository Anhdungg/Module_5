import { Component, OnInit } from '@angular/core';
import {ShareServiceService} from "../../share-service.service";

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  constructor(private shareService: ShareServiceService) { }

  ngOnInit(): void {
    this.shareService.placeholderSearch = 'Search name service';
  }
}
