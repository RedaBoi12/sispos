import { Category } from './../../../interfaces/category';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  //definitions
  addForm!: FormGroup;
  id: number;
  category!:any;


  constructor(private API: ApiService, public router: Router, @Inject(MAT_DIALOG_DATA) public data:any) {
    this.id = data.id;
  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'name': new FormControl(),
      'description': new FormControl()
    })

    this.API.getCategory(this.id).subscribe((response)=>{
      this.category = response;
      this.addForm.get('name')?.setValue(this.category[0].name);
      this.addForm.get('description')?.setValue(this.category[0].description);
    })
  }


  update(){
    let Data:any = {
      'name': `${this.addForm.get('name')?.value}`,
      'description': `${this.addForm.get('description')?.value}`,
    }
    this.API.updateCategory(this.id, Data).subscribe(()=>{});
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'This Category was Updated!',
      showConfirmButton: false,
      timer: 1500
    })
  }

    

}
