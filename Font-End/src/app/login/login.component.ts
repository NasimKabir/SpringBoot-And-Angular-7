import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  errorMessage = 'Username or password Invalid'
  invalidLogin=false

  constructor(private router:Router,private auth:AuthenticationService) { }
  ngOnInit() { }

  AuthLogin(){
    console.log(this.username);
    // if(this.username==="aaa" && this.password === 'aaa') {
        //Redirect to Welcome Page
        if(this.auth.authenticate(this.username,this.password)) {

        this.router.navigate(['wellcome',this.username])
      } else {
        this.invalidLogin = true
      }
  }
}
