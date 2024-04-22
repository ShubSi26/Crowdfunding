import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-compnt',
  templateUrl: './compnt.component.html',
  styleUrl: './compnt.component.css'
})
export class CompntComponent implements OnInit{
  project: any = [];
  ngOnInit(): void {
      this.getrecord();
  }
  constructor(private http:HttpClient){}
  getrecord():any{
    this.http.get<any>(AppComponent.rooturl + "/projectlist")
    .subscribe(
      response => {
        console.log('POST request successful2:', response);
        this.project = response
      },
      error => {
        console.error('POST request failed:', error);
        // Handle error as needed
      }
    );
  }
}
