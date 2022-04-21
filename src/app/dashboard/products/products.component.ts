import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductComponent } from './product/product.component';
import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import {  Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  //TABLE CONTENT
  displayedColumns= ['id', 'name', 'description', 'price', 'stock' , 'categoryid', 'isactivated' , 'actions'];
  dataSource!:MatTableDataSource<any>;

  //VARIABLES
  isEditing:boolean = false;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private categoriesAPI: ApiService, public router: Router, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getCategories();
  }

  filterData($event: any)
  {
    this.dataSource.filter = $event.target.value;
  }


  // GETS CATEGS
  getCategories(): void{
    this.categoriesAPI.getProducts().subscribe((response) =>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }


  // CREATES CATEGS
  openCreate(){
    this.dialog.open(AddproductComponent, {
      width: '50%',
      height: '80%',
    });
  }


  // DELETES CATEG
  edit(id: number){
    this.dialog.open(ProductComponent, {
      width: '50%',
      height: '80%',
      data:{
        id: id
      }
    });
  }

  // DELETES CATEG
  delete(id: number){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.categoriesAPI.deleteProduct(id).subscribe(() => {});
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  }

}