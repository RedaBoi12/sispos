import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //definitions
  addForm!: FormGroup;
  id: number;
  product!:any;
  categoryids:any;


  constructor(private API: ApiService, public router: Router, @Inject(MAT_DIALOG_DATA) public data:any) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'price': new FormControl(),
      'stock': new FormControl(),
      'categoryID': new FormControl(),
      'isActivated': new FormControl()
    })
    this.API.getProduct(this.id).subscribe((response)=>{
      this.product = response;
      this.addForm.get('name')?.setValue(this.product[0].name);
      this.addForm.get('description')?.setValue(this.product[0].description);
      this.addForm.get('price')?.setValue(this.product[0].price);
      this.addForm.get('stock')?.setValue(this.product[0].stock);
      this.addForm.get('categoryID')?.setValue(this.product[0].categoryID);
      this.addForm.get('isActivated')?.setValue(this.product[0].isActivated);
    })

    this.API.getCategoryIDs().subscribe((response) =>{
      this.categoryids = response;
    })
  }


  update(){
    let Data:any = {
      'name': `${this.addForm.get('name')?.value}`,
      'description': `${this.addForm.get('description')?.value}`,
      'price': this.addForm.get('price')?.value,
      'stock': this.addForm.get('stock')?.value,
      'categoryID': this.addForm.get('categoryID')?.value,
      'isActivated': this.addForm.get('isActivated')?.value
    }
    this.API.updateProduct(this.id, Data).subscribe(()=>{});
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'This Category was Updated!',
      showConfirmButton: false,
      timer: 1500
    })
  }

    

}