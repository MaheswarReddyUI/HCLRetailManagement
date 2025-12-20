import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inventorymanagement', // The URL path to access this module
    loadChildren: () => import('./inventory-management/inventory-management.module').then(m => m.InventoryManagementModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
