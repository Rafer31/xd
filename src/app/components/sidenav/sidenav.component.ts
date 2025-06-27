import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BusesComponent } from "../buses/buses.component";
@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

}
