import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { ManagerComponent } from './manager/manager.component';
import { SigninUpComponent } from './signin-up/signin-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signin_up',children:[
    {path:'',component:SigninUpComponent},
    {path:'manager',component:ManagerComponent},
    {path:'influencer',component:InfluencerComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
