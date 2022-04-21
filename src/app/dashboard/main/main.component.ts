import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  categoryCount!:any;
  productCount!:any;
  clientCount!:any;
  couponCount!:any;
  orderCount!:any;
  ordersComplete!:any;
  ordersProcessing!:any;
  ordersCancelled!:any;

  constructor(private API: ApiService) { }

  ngOnInit(): void {
    this.API.getCategoryCount().subscribe((result)=>{this.categoryCount = result[0].count});
    this.API.getProductCount().subscribe((result)=>{this.productCount = result[0].count});
    this.API.getClientCount().subscribe((result)=>{this.clientCount = result[0].count});
    this.API.getCouponCount().subscribe((result)=>{this.couponCount = result[0].count});

    this.API.getOrdersCount().subscribe((result)=>{this.orderCount = result[0].count});
    this.API.getOrdersCountbyStatus('complete').subscribe((result) =>{this.ordersComplete = result[0].count})
    this.API.getOrdersCountbyStatus('processing').subscribe((result) =>{this.ordersProcessing = result[0].count})
    this.API.getOrdersCountbyStatus('cancelled').subscribe((result) =>{this.ordersCancelled = result[0].count})
  }

}
