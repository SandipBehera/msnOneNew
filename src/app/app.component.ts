import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from "./slider/slider.component";
import { NavbarComponent } from './navbar/navbar.component';
import { InfosectionComponent } from "./infosection/infosection.component";
import { DownloadsComponent } from './downloads/downloads.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
import { FloatingbarComponent } from "./floatingbar/floatingbar.component";
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf,MatIconModule, SliderComponent, NavbarComponent, InfosectionComponent, DownloadsComponent, LocationComponent, ContactComponent, ModalComponent, FloatingbarComponent,FooterComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'msnnew';
  showBar = false;

  constructor(private modalService: NgbModal){}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const infoSection = document.querySelector('app-infosection');
    const scrollY = window.scrollY + window.innerHeight;

    if (infoSection) {
      const top = infoSection.getBoundingClientRect().top + window.scrollY;
      this.showBar = scrollY > top;
    }
  }

  scrollToContact() {
    const contact = document.querySelector('app-contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }
  open(title: string) {
    console.log('open', title);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = title;
  }
}
