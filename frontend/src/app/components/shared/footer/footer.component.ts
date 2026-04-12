import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resumeData } from '../../../data/resume-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socialLinks = [
    { icon: 'fab fa-linkedin', url: resumeData.contact.linkedin, label: 'LinkedIn' },
    { icon: 'fab fa-twitter', url: resumeData.contact.twitter, label: 'Twitter' },
    { icon: 'fab fa-github', url: resumeData.contact.github, label: 'GitHub' },
    { icon: 'fas fa-envelope', url: `mailto:${resumeData.contact.email}`, label: 'Email' }
  ];
}
