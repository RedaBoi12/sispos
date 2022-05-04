import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    categoryCount!: any;
    productCount!: any;
    clientCount!: any;
    couponCount!: any;
    orderCount!: any;
    sales: any;
    latestsale: any;
    latestclients: any;
    latestproducts: any;
    expiredcoupons: any;
    countrysales: any;
    ordersComplete!: any;
    ordersProcessing!: any;
    ordersCancelled!: any;


    results: any;
    clientActivityName: any;
    clientActivityCount: any;
    orderCompletionName: any;
    orderCompletionCount: any;
    constructor(private API: ApiService) { Chart.register(...registerables) }
    ngOnInit(): void {

        //LOADING ALL DATA
        //LOADING ALL DATA
        //LOADING ALL DATA

        this.API.getCategoryCount().subscribe((result) => { this.categoryCount = result[0].count });
        this.API.getProductCount().subscribe((result) => { this.productCount = result[0].count });
        this.API.getClientCount().subscribe((result) => { this.clientCount = result[0].count });
        this.API.getCouponCount().subscribe((result) => { this.couponCount = result[0].count });
        this.API.getSales().subscribe((result) => { this.sales = result[0].sum });
        this.API.getlatestSale().subscribe((result) => { this.latestsale = result[0].total });
        this.API.getlatestClients().subscribe((result) => { this.latestclients = result[0].count });
        this.API.getlatestProducts().subscribe((result) => { this.latestproducts = result[0].count });
        this.API.getexpiredCoupons().subscribe((result) => { this.expiredcoupons = result[0].count });
        this.API.getSalesinCountries().subscribe((result) => { this.countrysales = result });

        this.API.getOrdersCount().subscribe((result) => { this.orderCount = result[0].count });
        this.API.getOrdersCountbyStatus('complete').subscribe((result) => { this.ordersComplete = result[0].count })
        this.API.getOrdersCountbyStatus('processing').subscribe((result) => { this.ordersProcessing = result[0].count })
        this.API.getOrdersCountbyStatus('cancelled').subscribe((result) => { this.ordersCancelled = result[0].count })


        //CLIENTS CHART
        //CLIENTS CHART
        //CLIENTS CHART
        //CLIENTS CHART

        this.API.getClientActivity().subscribe((res) => {
            this.results = res;
            this.clientActivityName = this.results.map((client: any) => client.name);
            this.clientActivityCount = this.results.map((client: any) => client.count);

            const clientsChart = new Chart("clientsChart", {
                type: 'pie',
                data: {
                    labels: this.clientActivityName,
                    datasets: [{
                        label: 'Client Activity',
                        data: this.clientActivityCount,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 99, 132, 1)',

                        ],
                        borderWidth: 3
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });


        //ORDERS CHART
        //ORDERS CHART
        //ORDERS CHART
        //ORDERS CHART

        this.API.getOrdersCompletion().subscribe((res) => {
            this.results = res;
            this.clientActivityName = this.results.map((client: any) => client.name);
            this.clientActivityCount = this.results.map((client: any) => client.count);

            const ordersChart = new Chart("ordersChart", {
                type: 'pie',
                data: {
                    labels: this.clientActivityName,
                    datasets: [{
                        label: 'Orders Completion',
                        data: this.clientActivityCount,
                        backgroundColor: [
                            'rgba(0, 255, 0, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(0, 255, 0, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 3
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });



    }
}

