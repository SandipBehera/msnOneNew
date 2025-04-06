import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = 'Enquiry Now';
  constructor(public activeModal: NgbActiveModal,) {}
  submitFloorPlanForm() {
    // Handle form logic (send data to API, show toast, etc.)
    console.log('Form submitted!');
  }
}
