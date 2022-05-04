import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcoupon',
  templateUrl: './addcoupon.component.html',
  styleUrls: ['./addcoupon.component.scss']
})
export class AddcouponComponent implements OnInit {

  addForm!: FormGroup;
  isUnlimited:boolean = true;

  constructor(private API: ApiService, public router: Router) {
  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'isUnlimited': new FormControl(true),
      'expiration': new FormControl()
    })
  }

  changeEvent(){
    this.isUnlimited = !this.isUnlimited;
  }


  create(){
        if(this.isUnlimited)
        {
          let Data:any = {
            'name': `${this.addForm.get('name')?.value}`,
            'description': `${this.addForm.get('description')?.value}`,
            'expiration': `2099-12-12 10:47:24.752827`
          }
          this.API.addCoupon(Data).subscribe(()=>{});
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'This Category was Added!',
              showConfirmButton: false,
              timer: 1500
            })
        }
        else
        {
          let Data:any = {
            'name': `${this.addForm.get('name')?.value}`,
            'description': `${this.addForm.get('description')?.value}`,
            'expiration': `${this.addForm.get('expiration')?.value}`
          }
          this.API.addCoupon(Data).subscribe(()=>{});
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'This Category was Added!',
              showConfirmButton: false,
              timer: 1500
            })
        }
    }

}
