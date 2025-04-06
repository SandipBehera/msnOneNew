import { isPlatformBrowser, NgFor } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-infosection',
  imports: [MatIconModule,NgFor],
  templateUrl: './infosection.component.html',
  styleUrl: './infosection.component.css'
})
export class InfosectionComponent  {
  ismobile = false;
  stats = [
    { value: '7.7', label: 'Acres Site Area' },
    { value: '5', label: 'Towers' },
    { value: '55', label: 'Floors' },
    { value: '655', label: 'Uber-Luxury Residences.' },
    { value: '1,80,000 SQ. FT.', label: 'Clubhouse, Stilt & Skypark Amenities' }
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private modalService: NgbModal,) {
  }


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ismobile = window.innerWidth <= 768;
    }
  }
  open(title: string) {
    console.log('open', title);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = title;
  }
}
