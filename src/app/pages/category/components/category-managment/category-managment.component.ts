import { Component, Inject, OnInit } from '@angular/core';
import icClose from '@iconify/icons-ic/twotone-close';
import * as configs from '../../../../../static-data/configs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertService } from '@shared/services/alert.service';
import { CategoryService } from 'src/app/pages/category/services/category.service';

@Component({
  selector: 'vex-category-managment',
  templateUrl: './category-managment.component.html',
  styleUrls: ['./category-managment.component.scss']
})
export class CategoryManagmentComponent implements OnInit {

  icClose = icClose
  configs = configs

  form: FormGroup

  initForm(): void {
    this.form = this._fb.group({
      categoryId: [0, [Validators.required]],
      name: ['', [Validators.required]],
      description: [''],
      state: ['', [Validators.required]]
    });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public  data,
    private _fb: FormBuilder,
    private _alert: AlertService,
    private _categoryService: CategoryService,
    public _dialogRef: MatDialogRef<CategoryManagmentComponent>
  ) {
    this.initForm();
   }

  ngOnInit(): void {
    if (this.data != null) {
      this.CategoryById(this.data.data.categoryId);
    }
  }

  CategoryById(categoryId: number): void {
    this._categoryService.CategoryById(categoryId).subscribe(
      (resp) => {
        this.form.reset({
          categoryId: resp.categoryId,
          name: resp.name,
          description: resp.description,
          state: resp.state
        })
      }
    )
  }

  CategorySave(): void {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((controls) => {
        controls.markAllAsTouched();
      })
    }

    const categoryId = this.form.get('categoryId').value;

    if (categoryId > 0) {
      this.CategoryEdit(categoryId);
    } else {
      this.CategoryRegister();
    }
  }

  CategoryRegister(): void {
    this._categoryService.CategoryRegister(this.form.value).subscribe((resp) => {
      if (resp.isSuccess) {
        this._alert.success('Excelente', resp.message);
        this._dialogRef.close(true);
      } else {
        this._alert.warn('Atención', resp.message);
      }
    });
  }

  CategoryEdit(categoryId: number): void {
    this._categoryService.CategoryEdit(categoryId, this.form.value).subscribe((resp) => {
      if (resp.isSuccess) {
        this._alert.success('Excelente', resp.message);
        this._dialogRef.close(true);
      } else {
        this._alert.warn('Atención', resp.message);
      }
    })
  }

}
