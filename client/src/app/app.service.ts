import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"
import 'rxjs/Rx'

import { User } from "./users/user"

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  create(new_user: User){
    return this.http.post("/login", new_user).map(data => data.json()).toPromise()
  }

  am_i_logged_in(){
    return this.http.get("/am_i_logged_in").map(data => data.json()).toPromise()
  }

  bidProductOne(id, productOneBid){
    console.log("Service")
    console.log(id, productOneBid)
    return this.http.post("/bidproductone", {id:id, productOneBid:productOneBid}).map(data => data.json()).toPromise()
  }

  bidProductTwo(id, productTwoBid){
    console.log("Service")
    console.log(id, productTwoBid)
    return this.http.post("/bidproducttwo", {id:id, productTwoBid:productTwoBid}).map(data => data.json()).toPromise()
  }

  bidProductThree(id, productThreeBid){
    console.log("Service")
    console.log(id, productThreeBid)
    return this.http.post("/bidproductthree", {id:id, productThreeBid:productThreeBid}).map(data => data.json()).toPromise()
  }

  get_all(){
    return this.http.get("/get_all_users").map(data => data.json()).toPromise()
  }

}
