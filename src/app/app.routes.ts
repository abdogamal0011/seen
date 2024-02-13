import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DeveloperComponent } from './developerDetalis//developer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DeveloperDetalisComponent } from './developer/developer-detalis.component';
import { DetalisDetalisDeveloperComponent } from './detalis-detalis-developer/detalis-detalis-developer.component';
import { AreasComponent } from './areas/areas.component';
import { BlogDetalisComponent } from './blog-detalis/blog-detalis.component';

export const routes: Routes = [

  {path:'' , redirectTo :'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent ,title:'Home'},
  {path:'about' , component:AboutComponent,title:'Abou'},
  {path:'developer' , component:DeveloperComponent,title:'Developer'},
  {path:'projects' , component:ProjectsComponent,title:'Projects'},
  {path:'service' , component:ServiceComponent,title:'Services'},
  {path:'blog' , component:BlogComponent,title:'Blog'},
  {path:'contact' , component:ContactComponent,title:'Contact'},
  {path:'developerDetalis' , component:DeveloperDetalisComponent,title:'Detalis'},
  {path:'ProjectDetalis' , component:DetalisDetalisDeveloperComponent,title:'ProjectDetalis'},
  {path:'areas' , component:AreasComponent,title:'areas'},
  {path:'blogDetalis' , component:BlogDetalisComponent,title:'DetalisBlog'},
]
