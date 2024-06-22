import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    val.fundcollected = this.prgi.fundcollected;
    await this.getreq(event, val);
  }

  getreq(event: Event, val: any) {
    event.preventDefault();
    console.log(val);
    val.id = this.prgi._id;
    const data : any = sessionStorage.getItem('id');
    const headers = new HttpHeaders({"authorization": data })
    this.http.post<any>(AppComponent.rooturl + "/project/update", val,{ headers: headers })
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
}


