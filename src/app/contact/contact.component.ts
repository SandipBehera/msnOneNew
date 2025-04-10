import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { User } from '../user';
import { SavecontactService } from '../savecontact.service';

@Component({
  selector: 'app-contact',
  imports: [ ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  myForm:FormGroup;
  loading = false;
  @Input() user:User={name:'',email:'',phone:'', projectName:'MSN One'};
  constructor(private formbuilder:FormBuilder,private ServiceService: SavecontactService){
    this.myForm=this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      projectName: ['MSN One' ]
    })
  }
  submitContactForm() {
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
