import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-detail-view',
  templateUrl: './course-detail-view.component.html',
})
export class CourseDetailViewComponent implements OnInit {
  owner: string = 'MicaheDev';
  repo: string = 'maths_predator_courses';
  baseUrl = `https://raw.githubusercontent.com/${this.owner}/${this.repo}/master/es/contents`;
  markdownContent!: string;

  constructor(
    public http: HttpClient,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const part = params.get('part');
      if (part) {
        // Construir la URL utilizando el parámetro 'part'
        this.baseUrl = `${this.baseUrl}/${part}/index.md`;
        // Realizar la solicitud HTTP con la nueva URL
        this.http.get(this.baseUrl, { responseType: 'text' }).subscribe(
          (data: string) => {
            this.markdownContent = data;
          },
          (error) => {
            console.log('Error fetching data from GitHub API:', error);
          }
        );
      }
    });
  }
}
