import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor(private http:HttpClient, private service:ProductService, private route:Router){}
  products: any[] = [];

  ngOnInit() {
    this.service.getProducts().subscribe((data) => this.products = data)
  }
  editProduct(id: number) {
    this.route.navigate(['/products', id]);
  }
 
}
