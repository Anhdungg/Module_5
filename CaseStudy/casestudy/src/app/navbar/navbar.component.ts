import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      // $(".dropdown-toggle").click(function(){
      //   if ($(this).hasClass("active")){
      //     $(this).next(".dropdown-menu").slideUp(200);
      //     $(this).removeClass("active");
      //   }else{
      //     $(this).next(".dropdown-menu").slideDown(200);
      //     $(this).addClass("active");
      //   }
      // });
    });
  }

}
