import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  pst:any;
  ormData = {
    email: '',
    password: ''
  };
  constructor(private http:HttpClient,private router: Router){}
  getreq(event: Event,val:any){
    event.preventDefault();
    console.log(val);
    this.ormData.email = val.email;
    this.ormData.password = val.password;
    this.http.post<any>(AppComponent.rooturl + "/login", this.ormData)
      .subscribe(
        response => {
          console.log('POST request successful:', response);
          // Handle response as needed
          console.log(response._id);
          sessionStorage.setItem('id', response._id);
          this.router.navigate(['/profile']);
        },
        error => {
          console.error('POST request failed:', error);
          // Handle error as needed
        }
      );
  }
  
}
