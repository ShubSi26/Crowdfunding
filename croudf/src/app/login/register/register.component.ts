import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  pst:any;
  ormData = {
    name:'',
    email: '',
    password: ''
  };
  constructor(private http:HttpClient,private router: Router){}
  getreq(event: Event,val:any){
    event.preventDefault();
    console.log(val);
    this.ormData.email = val.email;
    this.ormData.password = val.password;
    this.ormData.name = val.name;
    this.http.post<any>(AppComponent.rooturl + "/auth/register", this.ormData)
      .subscribe(
        response => {
          sessionStorage.setItem('id', response.token);
          this.router.navigate(['/profile']);
        },
        error => {
          console.error('POST request failed:', error);
        }
      );
  }
  
}
