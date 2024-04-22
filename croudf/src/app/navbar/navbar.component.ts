import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 10) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
