import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { RegistrationService } from '../service/registration.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private _service : RegistrationService, private _router: Router, private _idservice: SharedService) { }

  ngOnInit(): void {
  }

  newMessage(id: string, name: string) {
    this._idservice.changeMessage(id, name);
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log(data)
        this.newMessage(data["id"].toString(), data["firstName"]);
        console.log("response recieved"),
        localStorage.setItem('token', "abc-qwe")
        this._router.navigate(['/home'])
      },
      error => {
        console.log(error)
        console.log("exception occured");
        this.msg = 'Bad Credentials, Please Enter Email and Password';
      }
    )
  }
}
