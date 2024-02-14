import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CoreModule } from '../core/core.module';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { MembersPageComponent } from './members-page/members-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent,
    FaqPageComponent,
    MembersPageComponent,
    AboutPageComponent,
  ],
  imports: [CommonModule, CoreModule, RouterModule],
})
export class PagesModule {}
