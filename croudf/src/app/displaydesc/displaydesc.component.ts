import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../Project';
@Component({
  selector: 'app-displaydesc',
  templateUrl: './displaydesc.component.html',
  styleUrl: './displaydesc.component.css'
})
export class DisplaydescComponent {
  constructor(private route: ActivatedRoute) {}
  prgi: any;
  title: any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.prgi = history.state.project as Project;
      console.log(this.prgi); 
      this.title = (this.prgi.name).substring(0, 14);
    });
  }
}
