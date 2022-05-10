import { Coupon } from './../../../interfaces/coupon';
import { Client } from './../../../interfaces/client';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.scss']
})
export class AddorderComponent implements OnInit {


  addForm!: FormGroup;
  clients?:Array<Client>;
  coupons?:Array<Coupon>;
  status:Array<any> = ['complete', 'processing', 'cancelled'];


  constructor(private API: ApiService, public router: Router) {
  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'client': new FormControl(),
      'products': new FormControl(`{\n "Products":\n   {\n    "product_id":"amount",\n   "product_id":"amount"\n    }\n}`),
      'couponused': new FormControl(),
      'status': new FormControl(),
      'total': new FormControl()
    })

    this.API.getClients().subscribe((response) => {
      this.clients = response;
    })
    this.API.getCoupons().subscribe((response) => {
      this.coupons = response;
    })
  }


  create() {
    let Data: any = {
      'client': this.addForm.get('client')?.value,
      'products': `${this.addForm.get('products')?.value}`,
      'couponused': this.addForm.get('couponused')?.value,
      'status': `${this.addForm.get('status')?.value}`,
      'total': this.addForm.get('total')?.value,
    }
    this.API.addOrder(Data).subscribe(() => { });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'This Client was Added!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
