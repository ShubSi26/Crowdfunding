import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../Project';

@Component({
  selector: 'app-disdes',
  templateUrl: './disdes.component.html',
  styleUrl: './disdes.component.css'
})
export class DisdesComponent {
  constructor(private router: Router) {}

  @Input()prgi: any;

}
