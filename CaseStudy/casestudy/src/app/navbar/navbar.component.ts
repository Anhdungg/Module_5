import { Component, OnInit } from '@angular/core';
import {ShareServiceService} from "../share-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  placeholderSearch: ShareServiceService = this.shareService;
  formSearch: FormGroup = new FormGroup({
    keyword: new FormControl('', [])
  });
  constructor(private shareService: ShareServiceService,
              private router: Router) { }

  ngOnInit(): void {
    // this.placeholderSearch = this.shareService.placeholderSearch;
  }

  onSubmit(){
    this.shareService.keyword = this.formSearch.controls.keyword.value;
    this.shareService.statusSearch = true;
    this.formSearch = new FormGroup({
      keyword: new FormControl('', [])
    });
    if (this.shareService.placeholderSearch.search('employee') != -1){
      this.router.navigate(['employee/list']);
    }else if(this.shareService.placeholderSearch.search('customer') != -1){
      this.router.navigate(['customer/list']);
    }else if(this.shareService.placeholderSearch.search('service') != -1){
      this.router.navigate(['service/list']);
    }else if(this.shareService.placeholderSearch.search('contract') != -1){
      this.router.navigate(['contract/list']);
    }else{

    }
  }
}
