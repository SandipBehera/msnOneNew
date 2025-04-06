import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floatingbar',
  imports: [NgIf],
  templateUrl: './floatingbar.component.html',
  styleUrl: './floatingbar.component.css'
})
export class FloatingbarComponent {
  showBar = false;

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
}
