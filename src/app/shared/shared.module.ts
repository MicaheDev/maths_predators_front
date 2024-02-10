import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FloatMenuComponent } from './components/float-menu/float-menu.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FloatMenuComponent,
  ],
  imports: [CommonModule, RouterModule, UiModule],
  exports: [DashboardComponent],
})
export class SharedModule {}
