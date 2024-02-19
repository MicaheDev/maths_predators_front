import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/layouts/dashboard/dashboard.component';
import { CoursesViewComponent } from './core/components/courses-view/courses-view.component';
import { CourseDetailViewComponent } from './core/components/course-detail-view/course-detail-view.component';
import { CourseContentViewComponent } from './core/components/course-content-view/course-content-view.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'es',
    pathMatch: 'full',
  },
  {
    path: ':lang',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        title: 'Maths Predators',
      },
      {
        path: 'about',
        component: AboutPageComponent,
        title: 'Acerca',
      },
      {
        path: 'contents',
        component: CoursesViewComponent,
        title: 'Contenidos del curso',
      },
      {
        path: 'contents/:part',
        component: CourseDetailViewComponent,
        title: 'Detalles del curso',
      },
      {
        path: 'contents/:part/:subPart',
        component: CourseContentViewComponent,
        title: 'Contenido del curso',
      },
      {
        path: 'contents/:part/:subPart/:contentPart',
        component: CourseContentViewComponent,
        title: 'Contenido del curso',
      },
      {
        path: 'faq',
        component: FaqPageComponent,
        title: 'Preguntas y respuestas',
      },
      {
        path: 'members',
        component: MembersPageComponent,
        title: 'Miembros y colaboradores',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
