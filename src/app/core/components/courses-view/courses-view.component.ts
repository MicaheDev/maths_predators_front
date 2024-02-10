import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, mergeMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
})
export class CoursesViewComponent implements OnInit {
  owner: string = 'MicaheDev';
  repo: string = 'maths_predator_courses';
  path: string = 'es/contents';
  baseUrl = `https://api.github.com/repos/${this.owner}/${this.repo}/contents`;
  parts$!: Observable<any>;
  parts: any[] = [];
  isLoading: boolean = false;

  constructor(public http: HttpClient, public router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.http.get<any[]>(`${this.baseUrl}/${this.path}`).subscribe(
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
