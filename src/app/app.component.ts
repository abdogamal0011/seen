import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DeveloperComponent } from './developerDetalis/developer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FotterComponent } from './fotter/fotter.component';
import { DeveloperDetalisComponent } from './developer/developer-detalis.component';
import { AreasComponent } from './areas/areas.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet ,AreasComponent , HomeComponent , AboutComponent , DeveloperComponent , DeveloperDetalisComponent,  ProjectsComponent , ContactComponent,BlogComponent,FotterComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
