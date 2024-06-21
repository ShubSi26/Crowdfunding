import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { response } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  buttonText: string = "Add Project";
  constructor(private http:HttpClient,private route: ActivatedRoute){}
 response:any;
 projects:any;
 isConditionTrue: boolean = true;
  ngOnInit(): void {
    const userId = sessionStorage.getItem('id');
    if (!userId) {
      // Redirect to the "not found" page if session storage item "id" is not available
      window.location.href = "/notfound";
    }
    this.recordf();
  }
  recordf():void{
    this.isConditionTrue  =true;
    const data : any = sessionStorage.getItem('id');
    const headers = new HttpHeaders({"authorization": data })
    this.http.post<any>(AppComponent.rooturl + "/profiledetails", {token: data},{ headers: headers })
    .subscribe(
      response => {
        console.log('POST request successful:', response);
        this.response = response;
      },
      error => {
        console.error('POST request failed:', error);
      }
    );
    this.http.get<any>(AppComponent.rooturl + "/project/userprojects",{ headers: headers })
    .subscribe(
      response => {
        console.log('POST request successful:', response);
        this.projects = response;
      },
      error => {
        console.error('POST request failed:', error);
      }
    );

  }
  toggleCondition(): void {
    this.isConditionTrue = !this.isConditionTrue;
    this.buttonText = this.isConditionTrue ? 'Add Project' : 'Project Details';
  }
  
}
