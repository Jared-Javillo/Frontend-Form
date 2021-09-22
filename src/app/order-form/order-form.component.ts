import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { OrderService } from '../_shared/services/order.service';
import { Order } from '../_shared/models/order.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  // This is a sample Form that performs a POST HTTP Request to an API
  // This form also has validations implemented
  @ViewChild('orderForm') orderForm: NgForm;

  model: Order = {
    id: '',
    senderName: '',
    senderEmail: '',
    recipientName: '',
    recipientEmail: '',
    dedication: '',
    voucher: ''
  };

  isSubmitting: boolean = false;

  constructor(
    private orderService: OrderService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.orderForm.invalid) {
      return;
    }

    // Start progress indicators here
    this.isSubmitting = true;
    this.orderService.createOrder(this.model).subscribe(response => {
      // This gets called on a successful request
      this.toastr.success('Order Sent');

      // Most of the time, use this logging to debug and check things
      this.isSubmitting = false;
    }, error => {
      this.toastr.error('Order unsuccessful');
      this.isSubmitting = false;
    }
    );
  }
}
