import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {

  //definitions
  addForm!: FormGroup;
  id: number;
  coupon!:any;
  isUnlimited:boolean = true;


  constructor(private API: ApiService, public router: Router, @Inject(MAT_DIALOG_DATA) public data:any) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'isUnlimited': new FormControl(true),
      'expiration': new FormControl()
    })

    this.API.getCoupon(this.id).subscribe((response)=>{
      this.coupon = response;
      this.addForm.get('name')?.setValue(this.coupon[0].name);
      this.addForm.get('description')?.setValue(this.coupon[0].description);
      this.addForm.get('expiration')?.setValue(this.coupon[0].expiration);
    })
  }

  changeEvent(){
    this.isUnlimited = !this.isUnlimited;
  }

  update(){
    if(this.isUnlimited)
    {
          let Data:any = {
            'name': `${this.addForm.get('name')?.value}`,
            'description': `${this.addForm.get('description')?.value}`,
            'expiration': `2099-12-12 10:47:24.752827`,
          }
          this.API.updateCoupon(this.id, Data).subscribe(()=>{});
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'This Coupon was Updated!',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else
    {
      let Data:any = {
        'name': `${this.addForm.get('name')?.value}`,
        'description': `${this.addForm.get('description')?.value}`,
        'expiration': `${this.addForm.get('expiration')?.value}`,
      }
      this.API.updateCoupon(this.id, Data).subscribe(()=>{});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'This Coupon was Updated!',
        showConfirmButton: false,
        timer: 1500
      })
    }


  }

    

}
