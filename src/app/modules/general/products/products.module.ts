import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from '../products/products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsComponent
  ],
  declarations: [
    ProductsComponent,
  ],
  providers: [
  ],
})
export class ProductsModule { }
