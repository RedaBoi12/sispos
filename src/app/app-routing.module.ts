import { AuthGuard } from './services/auth.guard';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { DashbarComponent } from './shared/dashbar/dashbar.component';
import { CouponsComponent } from './dashboard/coupons/coupons.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { MainComponent } from './dashboard/main/main.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashbarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard]
      },
      //////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////
      {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard]
      },
      //////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////
      {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [AuthGuard]
      },
      //////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////
      {
        path: 'clients',
        component: ClientsComponent,
        canActivate: [AuthGuard]
      },
      //////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////
      {
        path: 'coupons',
        component: CouponsComponent,
        canActivate: [AuthGuard]
      },
      //////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////
      {
        path: 'categories',
        component: CategoriesComponent,
        canActivate: [AuthGuard]
      },
      //////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////
      {
        path: 'tasks',
        component: TasksComponent,
        canActivate: [AuthGuard]
      }
      //////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
