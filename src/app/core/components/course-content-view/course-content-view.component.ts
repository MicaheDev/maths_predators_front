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
  partParam!: string;
  subPartParam!: string;
  contentParam!: string
  safeMarkdownContent: any;
  dataPart!: any;

  isPartLoading: boolean = false;
  isSubPartLoading: boolean = false;

  constructor(
    public http: HttpClient,
    public router: Router,
    private route: ActivatedRoute,
  ) {}

  isActive(path: string | null): boolean {
    // Obtener la URL actual
    const currentUrl = this.router.url;
    console.log('/' + path, currentUrl)


    // Verificar si la URL actual coincide con la ruta específica
    return currentUrl ===  '/' + path;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.partParam = params['part'];
      this.subPartParam = params['subPart'];
      this.contentParam = params['contentPart'];
      this.isPartLoading = true;
      this.isSubPartLoading = true;

      this.http.get<any[]>(`${this.baseUrl}/${this.partParam}`).subscribe(
        (data) => {
          this.dataPart = data;
        },
        (error) => {
          console.log('Error fetching data from GitHub API:', error);
        },
        () => {
          this.isPartLoading = false;
        },
      );

      this.http
        .get<any[]>(`${this.baseUrl}/${this.partParam}/${this.subPartParam}/${this.contentParam}`)
        .subscribe(
          (data) => {
            this.dataSubPart = data;
          },
          (error) => {
            console.log('Error fetching data from GitHub API:', error);
          },
          () => {
            this.isSubPartLoading = false;
          },
        );
    });
  }

  navegate(url: string) {
    this.router.navigateByUrl(url);
  }
}
