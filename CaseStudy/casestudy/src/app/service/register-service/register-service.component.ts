import { Component, OnInit } from '@angular/core';
import {ShareServiceService} from "../../share-service.service";

@Component({
  selector: 'app-register-service',
  templateUrl: './register-service.component.html',
  styleUrls: ['./register-service.component.css']
})
export class RegisterServiceComponent implements OnInit {

  constructor(private shareService: ShareServiceService) { }

  ngOnInit(): void {
    this.shareService.placeholderSearch = 'Search name service';
  }

}
