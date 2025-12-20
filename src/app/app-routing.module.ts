import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-management/components/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'inventorymanagement', // The URL path to access this module
    loadChildren: () => import('./inventory-management/inventory-management.module').then(m => m.InventoryManagementModule)
  },

    {path: 'feature',
    loadChildren: () =>
      import('./feature/feature.module')
        .then(m => m.FeatureModule)
  },
  {
    path: '',
    redirectTo: 'feature/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
