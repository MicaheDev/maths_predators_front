import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownBtnComponent } from './components/dropdown-btn/dropdown-btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DropdownBtnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DropdownBtnComponent]
})
export class UiModule { }
