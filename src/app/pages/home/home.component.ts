import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

import { LucideArrowRight } from '@lucide/angular';

import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'home',
  imports: [LucideArrowRight, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects = signal<Project[]>([]);
  coreSkills = [
      "Angular", 
      "TypeScript", 
      "Signals", 
      "RxJS", 
      "JavaScript", 
      "HTML/CSS", 
      "Tailwind CSS", 
      "Responsive Design", 
      "RESTful APIs", 
      "Component Architecture", 
      "State Management", 
      "Performance", 
      "Agile",
      "Git/Github"
  ];

  featuresProjects = computed(() => this.projects().filter(p => p.isFeatured));

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projectService.getProjectsList().subscribe(data => {
      this.projects.set(data);
    });
  }
}
