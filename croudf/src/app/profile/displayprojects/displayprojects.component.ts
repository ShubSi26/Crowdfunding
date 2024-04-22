import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayprojects',
  templateUrl: './displayprojects.component.html',
  styleUrl: './displayprojects.component.css'
})
export class DisplayprojectsComponent implements OnInit{

  @Input()prgi: any;

  constructor(private http:HttpClient,private router: Router){}
  ngOnInit(): void {
    console.log(this.prgi);
  }
  delt():void{
    const d:any = {
      id:sessionStorage.getItem('id'),
      index:this.prgi.ind
    }
    this.http.delete<any>(AppComponent.rooturl + "/deleteproject", { body: d })
    .subscribe(
      response => {
        console.log('POST request successful:', response);
        window.location.href="/profile";
      },
      error => {
        console.error('POST request failed:', error);
      }
    );
  }
  upd():void{
    this.router.navigate(['/updateproject'], { state: { project: this.prgi } });
  }
}
