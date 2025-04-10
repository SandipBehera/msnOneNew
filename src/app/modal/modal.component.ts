import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SavecontactService } from '../savecontact.service';
import { User } from '../user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title: string = 'Enquiry Now';
  myForm:UntypedFormGroup|any;
  loading = false;
  @Input() user:User={name:'',email:'',phone:'', projectName:'MSN One'};
  constructor(public activeModal: NgbActiveModal,private formbuilder:UntypedFormBuilder,private ServiceService: SavecontactService) {
    this.myForm=this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      projectName: ['MSN One' ]
    })
  }
  
  submitFloorPlanForm() {
    // handle contact form logic
    if (this.myForm.valid) {
      this.loading = true; // Show spinner
      // Manually include the hidden static field when submitting
      const formData = {
        ...this.myForm.getRawValue(), // Get all form values including disabled fields
      };
      this.ServiceService.formSubmit(formData).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
          alert('Thank you! Your message has been sent.');
          this.myForm.reset();
          this.loading = false; // Hide spinner
        },
        error => {
          console.error('Form submission failed:', error);
          alert('Something went wrong. Please try again.');
          this.loading = false; // Hide spinner
        }
      );
      
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
