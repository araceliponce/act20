import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  exports:[
    NavComponent
  ]
})
export class ActModule { }
