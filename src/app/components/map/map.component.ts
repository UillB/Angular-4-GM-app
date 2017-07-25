import {Component, OnInit} from "@angular/core";
import {User, Marker} from '../../app.models';
import {Router} from '@angular/router';

@Component({
  selector: "map",
  templateUrl: "./map.component.html"
})

export class MapComponent implements OnInit {
  session: any;
  user: User;
  markers: Marker[];
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 20;
  constructor(private router: Router){}
  ngOnInit() {
    this.markers = [
      {
        lat: 51.673858,
        lng: 7.815982,
        label: 'A'
      },
      {
        lat: 51.373858,
        lng: 7.215982,
        label: 'B'
      },
      {
        lat: 51.723858,
        lng: 7.895982,
        label: 'C'
      }
    ]
    this.session = JSON.parse(localStorage.getItem("session")) || {};
    this.AuthUser();
  }

  mapClicked($event: any){
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    })
  }

  AuthUser(){
    if(this.session && this.session.auth){
      let users = JSON.parse(localStorage.getItem("users"));
      for(let i = 0; i < users.length; i++){
        if(this.session.userEmail === users[i].email){
          this.user = users[i],
          this.user.markers = users[i].markers;
          console.log(this.user);
        }
      }
    }
    else {
      this.router.navigate(['signup']);
    }
  }
}
