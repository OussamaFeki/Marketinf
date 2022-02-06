import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-up',
  templateUrl: './signin-up.component.html',
  styleUrls: ['./signin-up.component.css']
})
export class SigninUpComponent implements OnInit {

  constructor(private route:Router) {

   }

  ngOnInit(): void {
  }
  toinfluancer(){
  this.route.navigate(['/signin_up/influencer'])
  }

}
