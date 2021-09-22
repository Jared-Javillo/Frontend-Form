import { Component, OnInit, ViewChild } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Order } from '../_shared/models/order.model';
import { Response } from '../_shared/models/response.model';
import { OrderService } from '../_shared/services/order.service';

@Component({
  selector: 'app-posts',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  // This is a sample component that performs a GET HTTP request to display data
  @ViewChild('searchOrderForm') searchOrderForm: NgForm;

  orders: Order[] = [];
  emailToSearch: string = '';
  isSubmitting: boolean = false;

  constructor(
    private orderService: OrderService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getOrdersByEmail(): void {
     // Start progress indicators here
     this.isSubmitting = true;
     this.orderService.getOrders(this.emailToSearch).subscribe((res: Response<Order[]>) => {
      this.orders = res.data;
      this.toastr.success('Here are your orders!');
      this.isSubmitting = false;
    }, error => {
      // this block gets executed when an error occurs
      this.toastr.error('Order search failed :( ');
      this.isSubmitting = false;
    });
  }

}
