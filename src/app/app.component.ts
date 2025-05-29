import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field'
import { LoginComponent } from "./components/login/login.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatFormFieldModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webeoxd';
}
