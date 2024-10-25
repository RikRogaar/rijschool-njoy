import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterLink,
    TranslateModule,
  ],
})
export class SharedModule { }