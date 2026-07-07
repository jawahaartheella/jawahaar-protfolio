import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { Project } from '../interfaces/project.interface';
import { ProjectsService } from '../services/projects.service';

export const projectsResolver: ResolveFn<Project[]> = (route, state) => {
  const projectService = inject(ProjectsService);
  return projectService.getProjectsList();
};
