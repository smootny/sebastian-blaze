import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from "./projects/projects.component";
import { SkillsComponent } from "./skills/skills.component";
import { FooterComponent } from "./footer/footer.component";
import { SideNavbarComponent } from "./sidebar/sidebar.component";
import { ProfileImageComponent } from './profile-image/profile-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    SideNavbarComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sebastian-blaze';
}
