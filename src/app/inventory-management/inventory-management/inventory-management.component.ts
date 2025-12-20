import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/product-management/services/product.service';



export interface TableRow {
  image: number;
  name: string;
  category: string;
  price: number;
  stockin: string;
  stockout: string;
}

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent {

  dataSource = new MatTableDataSource<TableRow>([]);
  displayedColumns: string[] = ['image', 'name', 'category', 'price', 'stockin', 'stockout'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizes = [5, 10, 25, 50, 100];
 
  constructor(private productsService:ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private loadProducts() {
    this.productsService.getProducts().subscribe((response: TableRow[]) => {
      this.dataSource.data = response; 
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    });
  }

}
