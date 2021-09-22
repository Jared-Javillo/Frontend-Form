import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostsComponent } from './posts/posts.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'post-form',
    component: PostFormComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'order-form',
    component: OrderFormComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
