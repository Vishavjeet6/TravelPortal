import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registration.service';
import { Admin } from '../model/admin';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  msg = '';
  admin = new Admin();

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    this._service.loginAdminFromRemote(this.admin).subscribe(
      data => {
        console.log(data)
        console.log("response recieved"),
        localStorage.setItem('token', "abc-qwe")
        this._router.navigate(['/adminhome'])
      },
      error => {
        console.log(error)
        console.log("exception occured");
        this.msg = 'Bad Credentials, Please Enter Email and Password';
      }
    )
  }
}
