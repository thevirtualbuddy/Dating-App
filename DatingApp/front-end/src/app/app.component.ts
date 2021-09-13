import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App for Pets';
  users: any;

  constructor(private http: HttpClient){

  }
  ngOnInit() {
    this.getUsers();
  }

  // Making http get request to our api
  getUsers(){
    this.http.get('https://localhost:44337/api/Users').subscribe(
      response => {
        this.users = response;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
