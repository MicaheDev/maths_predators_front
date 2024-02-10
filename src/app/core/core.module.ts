import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesViewComponent } from './components/courses-view/courses-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CourseDetailViewComponent } from './components/course-detail-view/course-detail-view.component';

@NgModule({
  declarations: [
    CoursesViewComponent,
    CourseDetailViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [CoursesViewComponent]
})
export class CoreModule { }
