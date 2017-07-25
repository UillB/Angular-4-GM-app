import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: "header",
  templateUrl: "./header.component.html"
})

export class HeaderComponent implements OnInit{
  session: any;
  constructor(private router: Router){}
  ngOnInit(){
    this.session = localStorage.getItem("session");
  }
  signOut(){
    this.session = localStorage.setItem("session", JSON.stringify({
      auth: false,
      userEmail: ''
    }));
    this.router.navigate(['signup']);
  }
}
