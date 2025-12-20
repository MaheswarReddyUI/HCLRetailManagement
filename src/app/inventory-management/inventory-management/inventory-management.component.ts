import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent {

  dataSource: any;
  private jsonUrl = './assets/data.json';

  displayedColumns: string[] = ['image', 'name', 'category', 'price', 'stockin', 'stockout'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.jsonUrl).subscribe((data) => {
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }

}
