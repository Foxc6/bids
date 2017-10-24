import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./user"
import { AppService } from "./../app.service"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	new_user: User

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.new_user = new User
  }

  login(){
    this.appService.create(this.new_user)
      .then(() => this.router.navigate(["/bids"]) )
      .catch(err => console.log("user login error", err))
  }

}
