import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resumeData } from '../../data/resume-data';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss'
})
export class InterestsComponent {
  interests = resumeData.interests;
}
