import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/product-list/product-list.component';
import { ProductDetailComponent } from 'src/app/product-detail/product-detail.component';

const routes: Routes = [
  {path: 'productList', component: ProductListComponent
  },
  {path: 'productDetail/:id', component: ProductDetailComponent
  },
  { path: '**', redirectTo:'productList',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
