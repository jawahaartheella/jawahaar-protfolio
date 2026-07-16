import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LucideCodeXml, LucideExternalLink } from '@lucide/angular';

import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';
import { ProjectCardSkeletonComponent } from '../../skeletons/project-card-skeleton/project-card-skeleton.component';

@Component({
  selector: 'all-projects',
  imports: [LucideCodeXml, LucideExternalLink, ProjectCardSkeletonComponent],
  templateUrl: './all-projects.component.html'
})
export class AllProjectsComponent {
  projects = signal<Project[]>([]);
  isLoading = signal(true);

  projectService = inject(ProjectsService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.projectService.getProjectsList().subscribe({
      next: (res) => {
        this.projects.set(res);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.log("Error: ", err.message);
        this.isLoading.set(true);
      }
    })
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
