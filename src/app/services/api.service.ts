import { Client } from './../interfaces/client';
import { Product } from './../interfaces/product';
import { Category } from '../interfaces/category';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Coupon } from '../interfaces/coupon';
import { Order } from '../interfaces/order';

const endpoint = 'https://sispos-api.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  // GET DATA FOR CHARTS
  getClientActivity() {
    return this.http.get(endpoint + 'clients/activity').pipe(
      catchError(this.handleError)
    );
  }
  getOrdersCompletion() {
    return this.http.get(endpoint + 'orders/completion').pipe(
      catchError(this.handleError)
    );
  }












  // COUNT SERVICES

  getCategoryCount(): Observable<any> {
    return this.http.get(endpoint + 'categories/count').pipe(
      catchError(this.handleError)
    );
  }
  getProductCount(): Observable<any> {
    return this.http.get(endpoint + 'products/count').pipe(
      catchError(this.handleError)
    );
  }
  getClientCount(): Observable<any> {
    return this.http.get(endpoint + 'clients/count').pipe(
      catchError(this.handleError)
    );
  }
  getCouponCount(): Observable<any> {
    return this.http.get(endpoint + 'coupons/count').pipe(
      catchError(this.handleError)
    );
  }
  getOrdersCount(): Observable<any> {
    return this.http.get(endpoint + 'orders/count').pipe(
      catchError(this.handleError)
    );
  }
  getOrdersCountbyStatus(status: any): Observable<any> {
    return this.http.get(endpoint + 'orders/count/' + status).pipe(
      catchError(this.handleError)
    );
  }


















  // CATEGORIES API
  // CATEGORIES API
  // CATEGORIES API
  // CATEGORIES API
  // CATEGORIES API
  // CATEGORIES API
  // CATEGORIES API
  // CATEGORIES API
  // CATEGORIES API
  // CATEGORIES API
  // CATEGORIES API


  getCategories(): Observable<any> {
    return this.http.get<Category>(endpoint + 'categories').pipe(
      catchError(this.handleError)
    );
  }

  getCategoryNames(): Observable<any> {
    return this.http.get(endpoint + 'categories/names').pipe(
      catchError(this.handleError)
    );
  }

  getCategoryIDs(): Observable<any> {
    return this.http.get(endpoint + 'categories/ids').pipe(
      catchError(this.handleError)
    );
  }

  getCategory(id: number): Observable<any> {
    return this.http.get<Category>(endpoint + 'categories/' + id).pipe(
      catchError(this.handleError)
    );
  }

  addCategory(categ: any): Observable<any> {
    return this.http.post(endpoint + 'categories', categ).pipe(
      catchError(this.handleError)
    );
  }

  updateCategory(id: number, categ: any): Observable<any> {
    return this.http.put(endpoint + 'categories/' + id, categ).pipe(
      catchError(this.handleError)
    );
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<Category>(endpoint + 'categories/' + id).pipe(
      catchError(this.handleError)
    );
  }






  // CHILD CATEGORIES API
  // CHILD CATEGORIES API
  // CHILD CATEGORIES API
  // CHILD CATEGORIES API
  // CHILD CATEGORIES API
  // CHILD CATEGORIES API
  // CHILD CATEGORIES API
  // CHILD CATEGORIES API
  // CHILD CATEGORIES API
  // CHILD CATEGORIES API
  // CHILD CATEGORIES API



  getCategoryChild(id: number, child: number): Observable<any> {
    return this.http.get<Category>(endpoint + 'categories/' + id + '/' + child).pipe(
      catchError(this.handleError)
    );
  }

  getCategoryChildren(id: number): Observable<any> {
    return this.http.get(endpoint + 'categories/' + id + '/children').pipe(
      catchError(this.handleError)
    );
  }

  addCategoryChild(categ: any, id: number): Observable<any> {
    return this.http.post(endpoint + 'categories/' + id + '/add', categ).pipe(
      catchError(this.handleError)
    );
  }

  updateCategoryChild(id: number, categ: any): Observable<any> {
    return this.http.put(endpoint + 'categories/child/' + id, categ).pipe(
      catchError(this.handleError)
    );
  }

  deleteCategoryChild(id: number): Observable<any> {
    return this.http.delete<Category>(endpoint + 'categories/child/' + id).pipe(
      catchError(this.handleError)
    );
  }









  // PRODUCTS API
  // PRODUCTS API
  // PRODUCTS API
  // PRODUCTS API
  // PRODUCTS API
  // PRODUCTS API
  // PRODUCTS API
  // PRODUCTS API
  // PRODUCTS API
  // PRODUCTS API
  // PRODUCTS API
  // PRODUCTS API


  getProducts(): Observable<any> {
    return this.http.get<Product>(endpoint + 'products').pipe(
      catchError(this.handleError)
    );
  }

  getlatestProducts(): Observable<any> {
    return this.http.get(endpoint + 'products/latest').pipe(
      catchError(this.handleError)
    );
  }

  getProductNames(): Observable<any> {
    return this.http.get<Product>(endpoint + 'products/names').pipe(
      catchError(this.handleError)
    );
  }

  getProductStock(id: number): Observable<any> {
    return this.http.get<Product>(endpoint + 'products/stock/' + id).pipe(
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<Product>(endpoint + 'products/' + id).pipe(
      catchError(this.handleError)
    );
  }

  addProduct(categ: any): Observable<any> {
    return this.http.post(endpoint + 'products', categ).pipe(
      catchError(this.handleError)
    );
  }

  updateProduct(id: number, categ: any): Observable<any> {
    return this.http.put(endpoint + 'products/' + id, categ).pipe(
      catchError(this.handleError)
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(endpoint + 'products/' + id).pipe(
      catchError(this.handleError)
    );
  }






















  // CLIENTS API
  // CLIENTS API
  // CLIENTS API
  // CLIENTS API
  // CLIENTS API
  // CLIENTS API
  // CLIENTS API
  // CLIENTS API
  // CLIENTS API
  // CLIENTS API
  // CLIENTS API
  // CLIENTS API


  getClients(): Observable<any> {
    return this.http.get<Client>(endpoint + 'clients').pipe(
      catchError(this.handleError)
    );
  }

  getClientsbyActivity(isActive: string): Observable<any> {
    return this.http.get(endpoint + 'clients/count/' + isActive).pipe(
      catchError(this.handleError)
    );
  }

  getlatestClients(): Observable<any> {
    return this.http.get(endpoint + 'clients/latest').pipe(
      catchError(this.handleError)
    );
  }

  getClientNames(): Observable<any> {
    return this.http.get(endpoint + 'clients/names').pipe(
      catchError(this.handleError)
    );
  }

  getClientIDs(): Observable<any> {
    return this.http.get(endpoint + 'clients/ids').pipe(
      catchError(this.handleError)
    );
  }

  getClient(id: number): Observable<any> {
    return this.http.get<Client>(endpoint + 'clients/' + id).pipe(
      catchError(this.handleError)
    );
  }

  addClient(categ: any): Observable<any> {
    return this.http.post(endpoint + 'clients', categ).pipe(
      catchError(this.handleError)
    );
  }

  updateClient(id: number, categ: any): Observable<any> {
    return this.http.put(endpoint + 'clients/' + id, categ).pipe(
      catchError(this.handleError)
    );
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete<Client>(endpoint + 'clients/' + id).pipe(
      catchError(this.handleError)
    );
  }

















  // COUPONS API
  // COUPONS API
  // COUPONS API
  // COUPONS API
  // COUPONS API
  // COUPONS API
  // COUPONS API
  // COUPONS API
  // COUPONS API
  // COUPONS API
  // COUPONS API
  // COUPONS API
  // COUPONS API



  getCoupons(): Observable<any> {
    return this.http.get<Coupon>(endpoint + 'coupons').pipe(
      catchError(this.handleError)
    );
  }

  getexpiredCoupons(): Observable<any> {
    return this.http.get(endpoint + 'coupons/expired').pipe(
      catchError(this.handleError)
    );
  }

  getCouponNames(): Observable<any> {
    return this.http.get(endpoint + 'coupons/names').pipe(
      catchError(this.handleError)
    );
  }

  getCouponIDs(): Observable<any> {
    return this.http.get(endpoint + 'coupons/ids').pipe(
      catchError(this.handleError)
    );
  }

  getCoupon(id: number): Observable<any> {
    return this.http.get<Coupon>(endpoint + 'coupons/' + id).pipe(
      catchError(this.handleError)
    );
  }

  addCoupon(categ: any): Observable<any> {
    return this.http.post(endpoint + 'coupons', categ).pipe(
      catchError(this.handleError)
    );
  }

  addUnlimitedCoupon(categ: any): Observable<any> {
    return this.http.post(endpoint + 'coupons/unlimited', categ).pipe(
      catchError(this.handleError)
    );
  }

  updateCoupon(id: number, categ: any): Observable<any> {
    return this.http.put(endpoint + 'coupons/' + id, categ).pipe(
      catchError(this.handleError)
    );
  }

  deleteCoupon(id: number): Observable<any> {
    return this.http.delete<Coupon>(endpoint + 'coupons/' + id).pipe(
      catchError(this.handleError)
    );
  }



























  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API
  // ORDERS API

  getSales(): Observable<any> {
    return this.http.get(endpoint + 'orders/sales').pipe(
      catchError(this.handleError)
    );
  }

  getSalesinCountries(): Observable<any> {
    return this.http.get(endpoint + 'orders/countries').pipe(
      catchError(this.handleError)
    );
  }

  getlatestSale(): Observable<any> {
    return this.http.get(endpoint + 'orders/latest').pipe(
      catchError(this.handleError)
    );
  }


  getOrders(): Observable<any> {
    return this.http.get<Order>(endpoint + 'orders').pipe(
      catchError(this.handleError)
    );
  }

  getOrderIDs(): Observable<any> {
    return this.http.get(endpoint + 'orders/ids').pipe(
      catchError(this.handleError)
    );
  }

  getOrder(id: number): Observable<any> {
    return this.http.get<Order>(endpoint + 'orders/' + id).pipe(
      catchError(this.handleError)
    );
  }

  getOrderProducts(id: number): Observable<any> {
    return this.http.get(endpoint + 'orders/:id/products' + id).pipe(
      catchError(this.handleError)
    );
  }


  addOrder(categ: any): Observable<any> {
    return this.http.post(endpoint + 'orders', categ).pipe(
      catchError(this.handleError)
    );
  }

  updateOrder(id: number, categ: any): Observable<any> {
    return this.http.put(endpoint + 'orders/' + id, categ).pipe(
      catchError(this.handleError)
    );
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete<Order>(endpoint + 'orders/' + id).pipe(
      catchError(this.handleError)
    );
  }





























  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API
  // TASKS API




  getTasks(): Observable<any> {
    return this.http.get<Task>(endpoint + 'tasks').pipe(
      catchError(this.handleError)
    );
  }

  getcompleteTasks(): Observable<any> {
    return this.http.get<Task>(endpoint + 'tasks/complete').pipe(
      catchError(this.handleError)
    );
  }

  getincompleteTasks(): Observable<any> {
    return this.http.get<Task>(endpoint + 'tasks/incomplete').pipe(
      catchError(this.handleError)
    );
  }

  getcompleteTasksCount(): Observable<any> {
    return this.http.get(endpoint + 'tasks/completeCount').pipe(
      catchError(this.handleError)
    );
  }

  getTaskNames(): Observable<any> {
    return this.http.get(endpoint + 'tasks/names').pipe(
      catchError(this.handleError)
    );
  }

  getTaskIDs(): Observable<any> {
    return this.http.get(endpoint + 'tasks/ids').pipe(
      catchError(this.handleError)
    );
  }

  getTask(id: number): Observable<any> {
    return this.http.get<Task>(endpoint + 'tasks/' + id).pipe(
      catchError(this.handleError)
    );
  }

  addTask(categ: any): Observable<any> {
    return this.http.post(endpoint + 'tasks', categ).pipe(
      catchError(this.handleError)
    );
  }

  editTaskCompletion(id: number): Observable<any> {
    return this.http.get(endpoint + 'tasks/' + id + '/switch').pipe(
      catchError(this.handleError)
    );
  }

  updateTask(id: number, categ: any): Observable<any> {
    return this.http.put(endpoint + 'tasks/' + id, categ).pipe(
      catchError(this.handleError)
    );
  }

  deleteCompleteTasks(): Observable<any> {
    return this.http.delete<Task>(endpoint + 'tasks/complete').pipe(
      catchError(this.handleError)
    );
  }





































  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => { new Error('Something bad happened; please try again later.'); })
  }
}
