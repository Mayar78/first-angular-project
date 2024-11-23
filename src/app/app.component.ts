import { routes } from './app.routes';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import path from 'path';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstAssignment';


}
