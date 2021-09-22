import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl: string = 'http://localhost:53573/api';

  constructor(
    private http: HttpClient
  ) { }

  createOrder(order: Order): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create_order`,
    {
      senderName: order.senderName,
      senderEmail: order.senderEmail,
      recipientName: order.recipientName,
      recipientEmail: order.recipientEmail,
      dedication: order.dedication,
      voucher: order.voucher
    }
    );
  }

  getOrders(emailToSearch: string): Observable<Object> {
    const x: Observable<Object> =
      this.http.get<Order[]>(`${this.baseUrl}/order?email=${emailToSearch}`).pipe(map(res => res));
    return x;
  }
}
