import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductManagementRoutingModule } from './product-management-routing.module';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ProductManagementRoutingModule
  
  ],
  exports: [ProductListComponent]
})
export class ProductManagementModule { }
