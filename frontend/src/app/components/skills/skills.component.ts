import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = resumeData.skills;

  getSkillsByCategory(category: string) {
    return this.skills.filter(s => s.category === category);
  }

  getProficiencyLabel(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Intermediate';
  }

  categories = [
    { key: 'frontend', label: 'Frontend', icon: 'fa-code' },
    { key: 'backend', label: 'Backend', icon: 'fa-server' },
    { key: 'database', label: 'Database', icon: 'fa-database' },
    { key: 'ml', label: 'ML / AI', icon: 'fa-brain' },
    { key: 'tools', label: 'Tools', icon: 'fa-toolbox' }
  ];
}
