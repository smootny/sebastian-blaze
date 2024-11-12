import { NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';

interface Section {
  id: string;
  name: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SideNavbarComponent {

  sections: Section[] = [
    { id: 'aboutMe', name: 'aboutMe' },
    { id: 'projects', name: 'projects' },
    { id: 'skills', name: 'skills' },
  ];

  currentSection: string = 'aboutMe';

  constructor() { }

 

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Scroll smoothly to the section
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY + (window.innerHeight / 2);

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          if (this.currentSection !== section.id) {
            this.currentSection = section.id;
          }
          break;
        }
      }
    }
  }

}
