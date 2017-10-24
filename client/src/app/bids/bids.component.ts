import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../users/user"
import { AppService } from "./../app.service"

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {
  user: User
  users: Array<User>

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  	this.appService.am_i_logged_in()
      .then(user => this.user = user)
      // .then(()=>console.log(this.user.productOneBid))
      .catch(() => this.router.navigate(["/bids"]))

    this.appService.get_all()
      .then(users => this.users = users)
      .catch(err => console.log("get all users error", err))

  }

  bidProductOne(id, productOneBid){
    this.appService.bidProductOne(id, productOneBid)
      .then(() => console.log(id, productOneBid))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change user productOneBid error", err))
  }

  bidProductTwo(id, productTwoBid){
    this.appService.bidProductTwo(id, productTwoBid)
      .then(() => console.log(id, productTwoBid))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change user productTwoBid error", err))
  }

  bidProductThree(id, productThreeBid){
    this.appService.bidProductThree(id, productThreeBid)
      .then(() => console.log(id, productThreeBid))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change user productThreeBid error", err))
  }
}
