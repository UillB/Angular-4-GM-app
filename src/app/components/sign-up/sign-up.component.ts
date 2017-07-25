import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../app.models';
import {Router} from '@angular/router';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html'
})

export class SignUpComponent implements OnInit {
  users: User[];
  newUser: User;
  confirmPassword: number;
  session: any;

  constructor(private router: Router){}
  ngOnInit() {
    this.session = JSON.parse(localStorage.getItem("session"));
    this.users = JSON.parse(localStorage.getItem("users"));
    this.initNewUser();
    if(this.session && this.session.auth){
      this.router.navigate(['dashboard']);
    }
  }

  initNewUser(){
    this.newUser = {
      name: undefined,
      email: undefined,
      password: null,
      markers: []
    },
    this.confirmPassword = null;
  }

  signUpUser(){
    this.users.push(this.newUser);
    localStorage.setItem("session", JSON.stringify({auth: true, email: this.newUser.email}));
    localStorage.setItem("users", JSON.stringify(this.users));
    // this.router.navigate(['dashboard']);
    console.log(localStorage.getItem("users"));
  }
}
