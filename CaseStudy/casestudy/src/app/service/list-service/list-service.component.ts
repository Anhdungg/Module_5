import { Component, OnInit } from '@angular/core';
import {ShareServiceService} from "../../share-service.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  constructor(private shareService: ShareServiceService) { }

  ngOnInit(): void {
    this.shareService.placeholderSearch = 'Search name service';
  }

}
