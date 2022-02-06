import { SigninUpComponent } from './signin-up/signin-up.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { ListofinfComponent } from './manager/listofinf/listofinf.component';
import { LproduitComponent } from './influencer/lproduit/lproduit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninUpComponent,
    ManagerComponent,
    InfluencerComponent,
    ListofinfComponent,
    LproduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
