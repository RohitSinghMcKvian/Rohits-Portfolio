import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = resumeData.experience;
  expandedIndex: number | null = null;

  toggleExpand(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  isExpanded(index: number): boolean {
    return this.expandedIndex === index;
  }
}
