import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/layouts/dashboard/dashboard.component';
import { CoursesViewComponent } from './core/components/courses-view/courses-view.component';
import { CourseDetailViewComponent } from './core/components/course-detail-view/course-detail-view.component';
import { CourseContentViewComponent } from './core/components/course-content-view/course-content-view.component';

const routes: Routes = [{
  path: "",
  component: DashboardComponent,
  children: [
    {
      path: "es/contents",
      component: CoursesViewComponent,
    },
    {
      path: "es/contents/:part",
      component: CourseDetailViewComponent
    },
    {
      path: "es/contents/:part/:subPart",
      component: CourseContentViewComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
