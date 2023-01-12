import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  products: Product[];
  constructor(private productService: ProductService,
          private routeParam: ActivatedRoute ) { }

  ngOnInit(): void {
     const id = this.routeParam.snapshot.params['id'];
    this.productService.recupererProduit().subscribe({
      next: (products) => {
        this.products = products.filter(val => val.id === id);
        this.product = this.products[0];
      }
    })
  }
}
