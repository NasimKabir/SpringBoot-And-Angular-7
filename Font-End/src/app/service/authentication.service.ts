import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor() { }

  authenticate(username, password) {
    console.log('before ' + this.isUserlogin());

    if (username === "aaa" && password === 'aaa') {
        sessionStorage.setItem('authenticateuser', username);
        console.log('after ' + this.isUserlogin());
        return true;
     }

    return false;
  }

  isUserlogin() {
    let user = sessionStorage.getItem('authenticateuser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticateuser')
  }
}
