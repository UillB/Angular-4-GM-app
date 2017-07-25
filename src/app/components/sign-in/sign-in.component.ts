import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../app.models';
import {Router} from '@angular/router';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html'
})

export class SignInComponent implements OnInit {
  users: User[];
  user: User;
  constructor(private router: Router){}
  ngOnInit(){
    this.initUser();
  }

  initUser(){
    this.user = {
      name: undefined,
      email: undefined,
      password: undefined,
      markers: []
    }
  }

  signIn(){
    this.users = JSON.parse(localStorage.getItem("users"));
    for(let i = 0; i < this.users.length; i++){
      if(this.user.email === this.users[i].email){
        console.log("Correct email");
        if(this.user.password === this.users[i].password){
          localStorage.setItem("session", JSON.stringify({
            auth: true,
            userEmail: this.user.email
          }));
          console.log("Correct password!");
        }
        this.router.navigate(['dashboard']);
      }
      else{
        console.log("Uncorrect data");
      }
    }
  }
}
