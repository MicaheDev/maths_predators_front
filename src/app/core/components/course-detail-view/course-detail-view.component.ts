import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail-view',
  templateUrl: './course-detail-view.component.html',
})
export class CourseDetailViewComponent implements OnInit {
  markdownContent!: string;
  baseUrl = `http://localhost:8000/api/courses`;
  dataPart!: any;
  isLoading: boolean = false;
  partParam!: string;
  safeMarkdownContent: any;

  constructor(
    public http: HttpClient,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.partParam = params['part'];

      this.http.get<any[]>(`${this.baseUrl}/${this.partParam}`).subscribe(
        (data) => {
          this.dataPart = data;
        },
        (error) => {
          console.log('Error fetching data from GitHub API:', error);
        },
        () => {
          this.isLoading = false;
        }
      );
    });
  }

  parseMarkdown(markdown: any){
    return atob(markdown)
  }
}
