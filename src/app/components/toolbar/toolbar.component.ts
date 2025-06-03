import { Component, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  router = inject(Router)
  activeLink = signal('')
  constructor(router: Router){
  
  }

  toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav?.classList.toggle('open');
  }

  goTo(route: string, event: Event) {
    event.preventDefault();
    this.activeLink.set(route);
    this.router.navigate([`admin-dashboard/${route}`]);
  }
  
}
