import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  heroData = resumeData.hero;

  typedOptions = {
    strings: [this.heroData.title],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false,
    showCursor: true,
    cursorChar: '|'
  };
}
