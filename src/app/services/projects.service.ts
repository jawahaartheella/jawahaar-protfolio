import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjectsList(): Observable<Project[]> {
    return this.http.get<Project[]>(`https://6a2fe086a7f8866418d533e0.mockapi.io/jawahaar/all-projects`);
  }
}
