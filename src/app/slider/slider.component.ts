import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList,  ViewChildren } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../modal/modal.component';
import { VisitorTrackerService } from '../visitor-tracker.service';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgbCarouselModule, MatIconModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  providers: [NgbCarouselConfig],
  
})
export class SliderComponent implements AfterViewInit {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  ismobile = false;
  @ViewChildren('carouselVideo') videos!: QueryList<ElementRef<HTMLVideoElement>>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private modalService: NgbModal, private VisitorTrackerService:VisitorTrackerService) {
    
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ismobile = window.innerWidth <= 768;
    }
    this.VisitorTrackerService.logVisitor('One By MSN').subscribe({
      next: (res) => console.log('Visitor logged', res),
      error: (err) => console.error('Error logging visitor:', err)
    });
    
  }
  

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.videos.forEach((videoRef) => {
        const video = videoRef.nativeElement;
        if (video && typeof video.play === 'function') {
          video.muted = true;
          video.volume = 0;
          video.autoplay = true;
          video.play().catch((err) => {
            console.warn('Autoplay error:', err);
          });
        }
      });
    }, 0);
  }
  open(title: string) {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
      backdrop: 'static',
      size: 'md',
    });
    modalRef.componentInstance.title = title;
    }
}
