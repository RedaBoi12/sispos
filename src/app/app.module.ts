import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './dashboard/main/main.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { CouponsComponent } from './dashboard/coupons/coupons.component';
import { DashbarComponent } from './shared/dashbar/dashbar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './dashboard/categories/category/category.component';
import { AddcategoryComponent } from './dashboard/categories/addcategory/addcategory.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductComponent } from './dashboard/products/product/product.component';
import { AddproductComponent } from './dashboard/products/addproduct/addproduct.component';
import { ClientComponent } from './dashboard/clients/client/client.component';
import { AddclientComponent } from './dashboard/clients/addclient/addclient.component';
import { MatListModule } from '@angular/material/list';
import { CouponComponent } from './dashboard/coupons/coupon/coupon.component';
import { AddcouponComponent } from './dashboard/coupons/addcoupon/addcoupon.component';
import { OrderComponent } from './dashboard/orders/order/order.component';
import { AddorderComponent } from './dashboard/orders/addorder/addorder.component';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddtaskComponent } from './dashboard/tasks/addtask/addtask.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent,
    ProductsComponent,
    OrdersComponent,
    ClientsComponent,
    CouponsComponent,
    DashbarComponent,
    CategoriesComponent,
    CategoryComponent,
    AddcategoryComponent,
    ProductComponent,
    AddproductComponent,
    ClientComponent,
    AddclientComponent,
    CouponComponent,
    AddcouponComponent,
    OrderComponent,
    AddorderComponent,
    TasksComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    FormsModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatSortModule,
    MatInputModule,
    MatListModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    DragDropModule,
    HttpClientModule,
    MatPaginatorModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
