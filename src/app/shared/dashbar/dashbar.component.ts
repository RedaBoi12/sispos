import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbar',
  templateUrl: './dashbar.component.html',
  styleUrls: ['./dashbar.component.scss']
})
export class DashbarComponent implements OnInit {

  constructor(public aservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
}
