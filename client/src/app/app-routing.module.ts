import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./users/users.component"
import { BidsComponent } from "./bids/bids.component"
import { ResultComponent } from "./result/result.component"

const routes: Routes = [
{ path: 'login', pathMatch: 'full', component: UsersComponent },
{ path: 'bids', pathMatch: 'full', component: BidsComponent },
{ path: 'result', pathMatch: 'full', component: ResultComponent },
{ path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
