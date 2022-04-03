import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  phone: number=0;
  otp: number=0;
  newotp:number=0;
  validotp: boolean = true;
  constructor(private router: Router) {}
 
  ngOnInit(): void {}

  getOTP(){
    this.newotp=Math.floor(Math.random()*10000);
    alert("Your OTP is "+this.newotp);
  }
  onSubmit() {
    if (this.otp !==this.newotp) {
      this.validotp = false;
    } else {
      this.router.navigate(['/changepassLink']);
    }
  }


}