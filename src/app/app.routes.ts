import { Routes } from '@angular/router';
import { projectsResolver } from './resolvers/projects.resolver';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
    { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
    { 
        path: 'projects', 
        loadComponent: () => import('./pages/all-projects/all-projects.component').then(m => m.AllProjectsComponent), 
        resolve: { 
            projects: projectsResolver 
        }
    }
];
