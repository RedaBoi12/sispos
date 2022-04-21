import { CouponComponent } from './coupon/coupon.component';
import { AddcouponComponent } from './addcoupon/addcoupon.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  //TABLE CONTENT
  displayedColumns= ['id', 'name', 'description', 'expiration', 'actions'];
  dataSource!:MatTableDataSource<any>;

  //VARIABLES
  isEditing:boolean = false;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private API: ApiService, public router: Router, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getCoupons();
  }

  filterData($event: any)
  {
    this.dataSource.filter = $event.target.value;
  }


  // GETS CATEGS
  getCoupons(): void{
    this.API.getCoupons().subscribe((response) =>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }


  // CREATES CATEGS
  openCreate(){
    this.dialog.open(AddcouponComponent, {
      width: '50%',
      height: '50%'
    });
  }


  // DELETES CATEG
  edit(id: number){
    this.dialog.open(CouponComponent, {
      width: '50%',
      height: '50%',
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
            this.API.deleteCoupon(id).subscribe(() => {});
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