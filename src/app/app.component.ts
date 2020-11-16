import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'practicaAngular';

  
  ngOnInit(){
firebase.initializeApp({
  apiKey: 'AIzaSyC3mqvuh6p1T6K-1qrk-295WGgIqAnBYew',
  authDomain:'appud1.firebaseio.com'
});

  }
}
