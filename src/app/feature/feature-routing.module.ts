import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductManagementModule } from '../product-management/product-management.module';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('../product-management/product-management.module')
        .then(m => m.ProductManagementModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
