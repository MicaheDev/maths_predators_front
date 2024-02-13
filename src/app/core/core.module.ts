import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesViewComponent } from './components/courses-view/courses-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CourseDetailViewComponent } from './components/course-detail-view/course-detail-view.component';
import { CourseContentViewComponent } from './components/course-content-view/course-content-view.component';
import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    CoursesViewComponent,
    CourseDetailViewComponent,
    CourseContentViewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    MarkdownModule.forRoot()
  ],
  exports: [CoursesViewComponent]
})
export class CoreModule { }
