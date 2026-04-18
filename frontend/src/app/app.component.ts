import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThemeService } from './services/theme.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    AchievementsComponent,
    InterestsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
      easing: 'ease-out'
    });

    // Initialize cursor
    this.initCursor();
    this.initParticles();
  }

  private initCursor(): void {
    const cursor = document.getElementById('cursor');
    const cursorAura = document.getElementById('cursorAura');

    if (!cursor || !cursorAura) return;

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorAura.style.left = e.clientX + 'px';
      cursorAura.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .btn-accent, .btn-outline, .card, .skill-tag, .project-card, .contact-link').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  private initParticles(): void {
    const particlesContainer = document.getElementById('globalParticles');
    if (!particlesContainer) return;

    // Add particles dynamically
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('span');
      particle.className = 'particle';
      particle.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 6 + 3}px;
        height: ${Math.random() * 6 + 3}px;
        background: ${this.getRandomColor()};
        animation-duration: ${Math.random() * 10 + 15}s;
        animation-delay: ${Math.random() * -20}s;
      `;
      particlesContainer.appendChild(particle);
    }
  }

  private getRandomColor(): string {
    const colors = ['var(--neon-cyan)', 'var(--neon-magenta)', 'var(--neon-purple)'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}