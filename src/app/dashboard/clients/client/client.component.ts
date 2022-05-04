import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { countries } from 'src/app/services/country-data-store';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {


  addForm!: FormGroup;
  plans: any = ['Free', 'Basic', 'Premium', 'Entreprise'];
  banks: any = ['MasterCard', 'Visa', 'Discover Card'];
  public countries: any = countries;
  client: any;
  id: number;

  constructor(private API: ApiService, public router: Router, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.id = data.id;
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

    this.API.getClient(this.id).subscribe((response) => {
      this.client = response;

      this.addForm.get('firstname')?.setValue(this.client[0].firstname || 'none');
      this.addForm.get('lastname')?.setValue(this.client[0].lastname || 'none');
      this.addForm.get('email')?.setValue(this.client[0].email || 'none');
      this.addForm.get('mobile')?.setValue(this.client[0].mobile || 'none');
      this.addForm.get('plan')?.setValue(this.client[0].plan || 'none');
      this.addForm.get('avatar')?.setValue(this.client[0].avatar || 'none');

      this.addForm.get('locationstreet')?.setValue(this.client[0].locationstreet || 'none');
      this.addForm.get('locationcity')?.setValue(this.client[0].locationcity || 'none');
      this.addForm.get('locationcountry')?.setValue(this.client[0].locationcountry || 'none');

      this.addForm.get('banktype')?.setValue(this.client[0].type || 'none');
      this.addForm.get('ccnumber')?.setValue(this.client[0].ccnumber || 'none');
      this.addForm.get('ccv')?.setValue(this.client[0].ccv || 'none');
      this.addForm.get('expiry')?.setValue(this.client[0].expiry || 'none');

      this.addForm.get('isActive')?.setValue(this.client[0].isActive || 'none');
    })
  }


  update() {
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
    this.API.updateClient(this.id, Data).subscribe(() => { });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'This Client was Updated!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
