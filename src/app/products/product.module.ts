import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductParameterService } from './product-parameter.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  providers:[
    ProductParameterService
  ]
})
export class ProductModule { }
