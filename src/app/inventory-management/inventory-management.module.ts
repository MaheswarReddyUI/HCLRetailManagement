import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';





@NgModule({
  declarations: [
    InventoryManagementComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class InventoryManagementModule { }
