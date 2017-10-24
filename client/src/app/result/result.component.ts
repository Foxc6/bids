import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../users/user"
import { AppService } from "./../app.service"

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
	users: Array<User>
	user: User
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {

  	this.appService.am_i_logged_in()
      .then(user => this.user = user)
      // .then(()=>console.log(this.user.productOneBid))
      .catch(err => console.log("Fail", err))

  	this.appService.get_all()
      .then(users => this.users = users)
      .catch(err => console.log("get all users error", err))
  }
}
