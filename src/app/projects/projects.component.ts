import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [NgFor]
})
export class ProjectsComponent {
  activeProjectIndex = 0;
  projectCount = 3;

  setActiveProject(index: number) {
    this.activeProjectIndex = index;
  }

  isActive(index: number): boolean {
    return this.activeProjectIndex === index;
  }

    openLink(url: string): void {
    window.open(url, '_blank'); 
}

}
