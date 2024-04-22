import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updateprojects',
  templateUrl: './updateprojects.component.html',
  styleUrl: './updateprojects.component.css'
})
export class UpdateprojectsComponent {
  constructor(private route: ActivatedRoute,private http: HttpClient) {}
  prgi: any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.prgi = history.state.project as any;
      console.log(this.prgi); 
    });
  }

  async update(event: Event, val: any){
    event.preventDefault();
    await this.delt();
    val.fundcollected = this.prgi.fundcollected;
    await this.getreq(event, val);
  }

  getreq(event: Event, val: any) {
    event.preventDefault();
    console.log(val);
    val.id = sessionStorage.getItem('id');
    this.http.post<any>(AppComponent.rooturl + "/addproject", val)
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
  delt():void{
    const d:any = {
      id:sessionStorage.getItem('id'),
      index:this.prgi.ind
    }
    this.http.delete<any>(AppComponent.rooturl + "/deleteproject", { body: d })
    .subscribe(
      response => {
        console.log('POST request successful:', response);
      },
      error => {
        console.error('POST request failed:', error);
      }
    );
  }
}
