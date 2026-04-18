import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { label: 'About', anchor: '#about' },
    { label: 'Experience', anchor: '#experience' },
    { label: 'Skills', anchor: '#skills' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'Education', anchor: '#education' },
    { label: 'Achievements', anchor: '#achievements' },
    { label: 'Interests', anchor: '#interests' },
    { label: 'Contact', anchor: '#contact' }
  ];

  constructor(public themeService: ThemeService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
