import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerDAOService} from "../customer-dao.service";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerDAO: CustomerDAOService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      if (param.id != undefined){
        if (this.customerDAO.findById(param.id) != undefined){
          this.customerDAO.deleteById(param.id).subscribe();
        }
      }
      this.customerDAO.statusSuccess = 'delete';
      this.router.navigate(['customer/list'])
    })
  }

}
