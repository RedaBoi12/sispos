import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {


  addForm!: FormGroup;
  categoryids: any;

  constructor(private API: ApiService, public router: Router) {
  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'price': new FormControl(),
      'stock': new FormControl(),
      'categoryID': new FormControl(),
      'isActivated': new FormControl(true)
    })

    this.API.getCategoryIDs().subscribe((response) => {
      this.categoryids = response;
    })
  }


  create() {
    let Data: any = {
      'name': `${this.addForm.get('name')?.value}`,
      'description': `${this.addForm.get('description')?.value}`,
      'price': this.addForm.get('price')?.value,
      'stock': this.addForm.get('stock')?.value,
      'categoryID': this.addForm.get('categoryID')?.value,
      'isActivated': this.addForm.get('isActivated')?.value
    }
    this.API.addProduct(Data).subscribe(() => { });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'This Category was Added!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
