import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile.component';

@Component({
  selector: 'app-addprojects',
  templateUrl: './addprojects.component.html',
  styleUrl: './addprojects.component.css'
})
export class AddprojectsComponent {
  constructor(private http: HttpClient, private router: Router) { }
  getreq(event: Event, val: any) {
    event.preventDefault();
    console.log(val);
    val.fundcollected=0;
    val.id = sessionStorage.getItem('id');
    const id :any = sessionStorage.getItem('id');
    const headers = new HttpHeaders({"authorization":  id})
    this.http.post<any>(AppComponent.rooturl + "/project/addproject", val,{ headers: headers })
    .subscribe(
      response => {
        console.log('POST request successful:', response);
        window.location.href="/profile";
      },
      error => {
        console.error('POST request failed:', error);
        // Handle error as needed
      }
    );
  }
}
