import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService, ContactMessage } from '../../services/contact.service';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactData = resumeData.contact;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  socialLinks = [
    { icon: 'fab fa-linkedin', url: this.contactData.linkedin, label: 'LinkedIn' },
    { icon: 'fab fa-github', url: this.contactData.github, label: 'GitHub' },
    { icon: 'fas fa-envelope', url: `mailto:${this.contactData.email}`, label: 'Email' }
  ];

  constructor(private contactService: ContactService) {}

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    const payload: ContactMessage = {
      name: this.contactForm.value.name!,
      email: this.contactForm.value.email!,
      message: this.contactForm.value.message!
    };

    this.contactService.sendMessage(payload).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.contactForm.reset();
        this.isSubmitting = false;
      },
      error: (err) => {
        this.submitError = 'Failed to send message. Please try again or email directly.';
        this.isSubmitting = false;
        console.error('Contact form error:', err);
      }
    });
  }

  getFieldError(field: string): string {
    const control = this.contactForm.get(field);
    if (control?.touched && control?.errors) {
      if (control.errors['required']) return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      if (control.errors['email']) return 'Please enter a valid email';
      if (control.errors['minlength']) {
        const min = control.errors['minlength'].requiredLength;
        return `Minimum ${min} characters required`;
      }
    }
    return '';
  }
}
