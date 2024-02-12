import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-content-view',
  templateUrl: './course-content-view.component.html',
})
export class CourseContentViewComponent {
  markdownContent!: string;
  baseUrl = `http://localhost:8000/api/courses`;
  dataSubPart!: any;
  isLoading: boolean = false;
  partParam!: string;
  subPartParam!: string;
  safeMarkdownContent: any;
  dataPart!: any;

  constructor(
    public http: HttpClient,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.partParam = params['part'];
      this.subPartParam = params['subPart'];

      this.http.get<any[]>(`${this.baseUrl}/${this.partParam}`).subscribe(
        (data) => {
          this.dataPart = data;
        },
        (error) => {
          console.log('Error fetching data from GitHub API:', error);
        },
        () => {
          this.isLoading = false;
        },
      );

      this.http
        .get<any[]>(`${this.baseUrl}/${this.partParam}/${this.subPartParam}`)
        .subscribe(
          (data) => {
            this.dataSubPart = data;
          },
          (error) => {
            console.log('Error fetching data from GitHub API:', error);
          },
          () => {
            this.isLoading = false;
          },
        );
    });
  }
}
