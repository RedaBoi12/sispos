import { Category } from './../../interfaces/category';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class CategoriesComponent implements OnInit {
  //TABLE CONTENT
  displayedColumns = ['id', 'name', 'description', 'shell', 'createdat', 'actions'];

  dataSource!: MatTableDataSource<any>;
  expandedElement!: Category | null;
  children?: Array<Category>;
  //VARIABLES
  isEditing: boolean = false;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    public API: ApiService,
    public router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  // GETS CATEGS
  getCategories(): void {
    this.API.getMotherCategories().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }

  checkChildren(id: number) {
    this.API.getCategoryChildren(id).subscribe((res) => this.children = res);
  }

  // CREATES CATEGS
  openCreate() {
    this.dialog.open(AddcategoryComponent, {
      width: '50%',
      height: '70%',
    });
  }

  // DELETES CATEG
  edit(id: number) {
    this.dialog.open(CategoryComponent, {
      width: '50%',
      height: '70%',
      data: {
        id: id,
      },
    });
  }

  // DELETES CATEG
  delete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.API.deleteCategory(id).subscribe(() => { });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}
