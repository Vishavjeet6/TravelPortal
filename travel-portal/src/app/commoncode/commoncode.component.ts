import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commoncode',
  templateUrl: './commoncode.component.html',
  styleUrls: ['./commoncode.component.css']
})
export class CommoncodeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }



  signOut(){
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }

}
