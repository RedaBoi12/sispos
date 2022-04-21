import { Client } from './../../interfaces/client';
import { ClientComponent } from './client/client.component';
import { AddclientComponent } from './addclient/addclient.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientsComponent implements OnInit {
  //TABLE CONTENT
  displayedColumns= ['id', 'fullname', 'email', 'plan', 'isActive', 'actions'];
  dataSource!:MatTableDataSource<any>;
  expandedElement!: Client | null;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private API: ApiService, public router: Router, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getClients();
  }

  filterData($event: any)
  {
    this.dataSource.filter = $event.target.value;
  }


  // GETS CATEGS
  getClients(): void{
    this.API.getClients().subscribe((response) =>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }


  // CREATES CATEGS
  openCreate(){
    this.dialog.open(AddclientComponent,{
      width: '60%',
      height: '100%',
    });
  }


  // DELETES CATEG
  edit(id: number){
    this.dialog.open(ClientComponent, {
      width: '60%',
      height: '90%',
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
            this.API.deleteClient(id).subscribe(() => {});
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