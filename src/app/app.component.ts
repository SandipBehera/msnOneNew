import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from "./slider/slider.component";
import { NavbarComponent } from './navbar/navbar.component';
import { InfosectionComponent } from "./infosection/infosection.component";
import { DownloadsComponent } from './downloads/downloads.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
import { FloatingbarComponent } from "./floatingbar/floatingbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SliderComponent, NavbarComponent, InfosectionComponent, DownloadsComponent, LocationComponent, ContactComponent, ModalComponent, FloatingbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'msnnew';
}
