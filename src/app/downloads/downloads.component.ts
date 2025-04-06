import { NgFor, NgIf } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-downloads',
  imports: [NgbCarousel,MatIconModule,NgIf,NgFor,NgbCarouselModule],
  templateUrl: './downloads.component.html',
  styleUrl: './downloads.component.css',
  providers: [NgbCarouselConfig]
})
export class DownloadsComponent {
  images = [
    {
      thumbnail: 'img/gallery1.jpg',
      full: 'img/gallery1.jpg',
      alt: 'Table Full of Spices',
    },
    {
      thumbnail: 'img/gallery2.jpg',
      full: 'img/gallery2.jpg',
      alt: 'Winter Landscape',
    },
    {
      thumbnail: 'img/gallery3.jpg',
      full: 'img/gallery3.jpg',
      alt: 'View of the City in the Mountains',
    },
    {
      thumbnail: 'img/gallery4.jpg',
      full: 'img/gallery4.jpg',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'img/gallery5.jpg',
      full: 'img/gallery5.jpg',
      alt: 'Place Royale Bruxelles',
    },
    {
      thumbnail: 'img/gallery6.jpg',
      full: 'img/gallery6.jpg',
      alt: 'Place Royale Bruxelles',
    },
  ];
  amenities = [
    {
      title: 'Gym Area',
      image: 'img/amen-1.jpg',
      description: 'Stay fit while enjoying breathtaking views at our elevated gym, designed to inspire and energize your workouts.',
    },
    {
      title: 'Outdoor Games',
      image: 'img/amen-2.jpg',
      description: 'Unleash your energy with exciting outdoor games in a vibrant, open space designed for fun and fitness.',
    },
    {
      title: 'Swimming Area',
      image: 'img/amen-3.jpg',
      description: 'Dive into luxury at our stunning swimming pool, designed for relaxation and rejuvenation.',
    },
    {
      title: 'Indore Games',
      image: 'img/amen-4.jpg',
      description: 'Engage in friendly competition with a variety of indoor games, perfect for all ages and skill levels.',
    },
    {
      title: 'Jogging Track',
      image: 'img/amen-5.jpg',
      description: 'Breathe in the fresh air as you jog along our scenic track, surrounded by nature and tranquility.',
    },
    {
      title: 'Yoga Deck',
      image: 'img/amen-6.jpg',
      description: 'Peaceful outdoor yoga deck with a calming view and fresh air.',
    },
    {
      title:'Club House',
      image: 'img/amen-7.jpg',
      description: 'A luxurious clubhouse with a stunning view, perfect for relaxation and socializing.',
    }
  ];
  showNavigationArrows = false;
	showNavigationIndicators = false;
  currentImage: string = '';
  groupedImages: any[] = [];
  groupedAmenities: any[][] = [];
  
  @ViewChild('lightbox') lightboxModal!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  openLightbox(imageUrl: string) {
    this.currentImage = imageUrl;
    this.modalService.open(this.lightboxModal, { size: 'lg', centered: true });
  }
  handleKeyDown(event: KeyboardEvent, imageUrl: string): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.openLightbox(imageUrl);
    }
  }
  ngOnInit() {
    this.groupImages();
    this.groupedAmenities = this.chunk(this.amenities, 3);
  }

  groupImages() {
    const chunkSize = 3;
    for (let i = 0; i < this.images.length; i += chunkSize) {
      this.groupedImages.push(this.images.slice(i, i + chunkSize));
    }
  }
  chunk(arr: any[], size: number) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }
  open(title: string) {
      console.log('open', title);
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.title = title;
    }
  
}
