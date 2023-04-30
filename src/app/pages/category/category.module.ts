import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { SharedModule } from '@shared/shared.module';
import { CategoryManagmentComponent } from './category-managment/category-managment.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryManagmentComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
