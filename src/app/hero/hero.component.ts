import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/files/resume.pdf'; 
    link.download = 'resume.pdf';
    link.click();
  }
  
}
