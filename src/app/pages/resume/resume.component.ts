import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideArrowRight, LucideCalendar, LucideDownload, LucideMapPin } from '@lucide/angular';

@Component({
  selector: 'app-resume',
  imports: [LucideArrowRight, LucideDownload, LucideCalendar, LucideMapPin, RouterLink],
  templateUrl: './resume.component.html'
})
export class ResumeComponent {
  router = inject(Router);

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
