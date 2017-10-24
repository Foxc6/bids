import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidsComponent } from './bids/bids.component';
import { UsersComponent } from './users/users.component';
import { ResultComponent } from './result/result.component';

import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    BidsComponent,
    UsersComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
