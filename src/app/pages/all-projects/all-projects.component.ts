import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LucideCodeXml, LucideExternalLink } from '@lucide/angular';

import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-all-projects',
  imports: [LucideCodeXml, LucideExternalLink],
  templateUrl: './all-projects.component.html'
})
export class AllProjectsComponent {
  projects= signal<Project[]>([]);

  projectService = inject(ProjectsService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.projects.set(this.route.snapshot.data['projects']);
    console.log(this.projects());
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
