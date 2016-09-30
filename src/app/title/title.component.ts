import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  title = "A specialized tour of Heroes!!";
  user: String;
  @Input()
  subTitle;

  constructor(private userServcie: UserService) { 
    this.user = userServcie.userName;
  }

  ngOnInit() {  }



}
