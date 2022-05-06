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
  motherIDs:any;
  id: number;
  category!:any;
  isChild:boolean = false;


  constructor(private API: ApiService, public router: Router, @Inject(MAT_DIALOG_DATA) public data:any) {

    // DATA INJECT FROM CATEGORIES PAGE
    this.id = data.id;

  }

  ngOnInit(): void {

    this.addForm = new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'shell': new FormControl(),
      'ismother': new FormControl(),
      'mother': new FormControl(),
    })

    this.API.getCategory(this.id).subscribe((response)=>{
      this.category = response;
      this.addForm.get('name')?.setValue(this.category[0].name);
      this.addForm.get('description')?.setValue(this.category[0].description);
      this.addForm.get('shell')?.setValue(this.category[0].shell);
    })
    this.API.getCategoryIDs().subscribe((res)=>this.motherIDs = res);
  }

  update(){

    let Data:any = {
      'name': `${this.addForm.get('name')?.value}`,
      'description': `${this.addForm.get('description')?.value}`,
      'shell': `${this.addForm.get('shell')?.value}`
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
