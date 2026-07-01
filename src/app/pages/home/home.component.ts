import { Component, computed, OnInit, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LucideArrowRight } from '@lucide/angular';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'home',
  imports: [NavbarComponent, LucideArrowRight],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects = signal<Project[]>([]);

  featuresProjects = computed(() => this.projects().filter(p => p.isFeatured));

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projectService.getProjectsList().subscribe(data => {
      this.projects.set(data);
    });
  }
}
