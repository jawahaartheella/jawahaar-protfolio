import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private projectService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.projectService.getProjectsList().subscribe(data => {
      this.projects.set(data);
    });
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
