import { Component, computed, OnInit, signal } from '@angular/core';

import { LucideArrowRight } from '@lucide/angular';

import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'home',
  imports: [LucideArrowRight],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects = signal<Project[]>([]);
  techStack = ["Angular", "JavaScript", "TypeScript", "RxJS", "HTML/CSS", "Tailwind CSS"];

  featuresProjects = computed(() => this.projects().filter(p => p.isFeatured));

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projectService.getProjectsList().subscribe(data => {
      this.projects.set(data);
    });
  }
}
