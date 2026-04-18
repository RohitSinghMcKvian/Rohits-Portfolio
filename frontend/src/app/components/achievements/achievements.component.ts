import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  achievements = resumeData.achievements;
}
