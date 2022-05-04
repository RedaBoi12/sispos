import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  addForm!: FormGroup;

  constructor(private API: ApiService, public router: Router) {
  }

  ngOnInit(): void {

    this.addForm = new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'shell': new FormControl(),
      'mother': new FormControl('none')
    })

  }


  create(){
    // STORE INPUT IN A DATA VARIABLE
    let Data:any = {
      'name': `${this.addForm.get('name')?.value}`,
      'description': `${this.addForm.get('description')?.value}`,
      'createdat': `${Date()}`,
      'shell': `${this.addForm.get('shell')?.value}`,
      'motherCategory': `${this.addForm.get('mother')?.value}`
    }

    //LOAD DATA VARIABLE INTO POST REQUEST
    this.API.addCategory(Data).subscribe(()=>{});
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'This Category was Added!',
        showConfirmButton: false,
        timer: 1500
      })

  }

}
