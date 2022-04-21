import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  addForm!: FormGroup;
  order:any;
  id: number;
  clients:any;
  coupons:any;
  status:any = ['complete', 'processing', 'cancelled'];

  constructor(private API: ApiService, public router: Router, @Inject(MAT_DIALOG_DATA) public data:any) {
    this.id = data.id;
  }

  ngOnInit(): void {

    this.addForm = new FormGroup({
      'client': new FormControl(),
      'ordertime': new FormControl(),
      'products': new FormControl(),
      'couponused': new FormControl(),
      'status': new FormControl()
    })

    this.API.getOrder(this.id).subscribe((response)=>{
      this.order = response;

      this.addForm.get('client')?.setValue(this.order[0].client);
      this.addForm.get('ordertime')?.setValue(this.order[0].ordertime);
      this.addForm.get('products')?.setValue(JSON.stringify(this.order[0].products));
      this.addForm.get('couponused')?.setValue(this.order[0].couponused);
      this.addForm.get('status')?.setValue(this.order[0].status);
    })

    this.API.getClientIDs().subscribe((response)=>{
      this.clients = response;
    })
    this.API.getCouponIDs().subscribe((response)=>{
      this.coupons = response;
    })
  }


  update(){
    let Data:any = {
      'client': `${this.addForm.get('client')?.value}`,
      'ordertime': `${this.addForm.get('ordertime')?.value}`,
      'products': `${JSON.stringify(this.order[0].products)}`,
      'couponused': this.addForm.get('couponused')?.value,
      'status': this.addForm.get('status')?.value
    }
    this.API.updateClient(this.id, Data).subscribe(()=>{});
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'This Client was Updated!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
