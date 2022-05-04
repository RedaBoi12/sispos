import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { countries } from 'src/app/services/country-data-store';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {


  addForm!: FormGroup;
  plans: any = ['Free', 'Basic', 'Premium', 'Entreprise'];
  banks: any = ['MasterCard', 'Visa', 'Discover Card'];
  public countries: any = countries;


  constructor(private API: ApiService, public router: Router) {
  }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'firstname': new FormControl(),
      'lastname': new FormControl(),
      'email': new FormControl(),
      'mobile': new FormControl(),
      'plan': new FormControl(),
      'avatar': new FormControl(),

      'locationstreet': new FormControl(),
      'locationcity': new FormControl(),
      'locationcountry': new FormControl(),

      'banktype': new FormControl(),
      'ccnumber': new FormControl(),
      'ccv': new FormControl(),
      'expiry': new FormControl(),

      'isActive': new FormControl(true)
    })
  }


  create() {
    let Data: any = {
      'firstname': `${this.addForm.get('firstname')?.value}`,
      'lastname': `${this.addForm.get('lastname')?.value}`,
      'email': `${this.addForm.get('email')?.value}`,
      'mobile': this.addForm.get('mobile')?.value,
      'plan': this.addForm.get('plan')?.value,
      'avatar': this.addForm.get('avatar')?.value,

      'locationstreet': this.addForm.get('locationstreet')?.value,
      'locationcity': this.addForm.get('locationcity')?.value,
      'locationcountry': this.addForm.get('locationcountry')?.value,

      'type': this.addForm.get('banktype')?.value,
      'ccnumber': this.addForm.get('ccnumber')?.value,
      'ccv': this.addForm.get('ccv')?.value,
      'expiry': this.addForm.get('expiry')?.value,

      'isActive': this.addForm.get('isActive')?.value
    }

    this.API.addClient(Data).subscribe(() => { });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'This Client was Added!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
