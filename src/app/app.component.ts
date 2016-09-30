import { Component, OnInit } from '@angular/core';



@Component({
  providers: [],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  subTitle = 'V1.0.0';
  
  constructor() {}

  ngOnInit(): void {

  }
}
