import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      id:this.prgi._id
    }
    const data : any = sessionStorage.getItem('id');
    const headers = new HttpHeaders({"authorization": data })
    this.http.post<any>(AppComponent.rooturl + "/project/delete",d,{headers : headers} )
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
