import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { SchoolComponent } from './school/school.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '\about', component: AboutComponent},
  {path: '\experiance', component: ExperianceComponent},
  {path: '\school', component: SchoolComponent},
  {path: '\skills', component: SkillsComponent},
  {path: '\projects', component: ProjectsComponent},
  {path: '\interests', component: InterestsComponent},
  {path: '\contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
