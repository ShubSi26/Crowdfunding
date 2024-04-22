import { HttpClient } from '@angular/common/http';
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
    const data = sessionStorage.getItem('id');
    console.log(data);
    this.http.post<any>(AppComponent.rooturl + "/profiledetails", {id: data})
    .subscribe(
      response => {
        console.log('POST request successful:', response);
        this.response = response;
        this.projects = response.projects;
        let i=0;
        this.projects.forEach((p:any) => {
            p.ind = i;
            i++;
        });
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
