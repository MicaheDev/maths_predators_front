import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, mergeMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
})
export class CoursesViewComponent implements OnInit {
  baseUrl = `http://localhost:8000/api/courses`;
  parts$!: Observable<any>;
  parts: any[] = [];
  isLoading: boolean = false;

  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.http.get<any[]>(`${this.baseUrl}`).subscribe(
      (data) => {
        this.parts = data;
      },
      (error) => {
        console.log('Error fetching data from GitHub API:', error);
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  navegate(route: string): void {
    this.router.navigate([route], { replaceUrl: true });
  }
}
