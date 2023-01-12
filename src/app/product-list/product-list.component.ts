import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productForms: FormGroup;
  products: Product[];
  loading: boolean = false;
  visible: boolean = false;
  constructor(private productForm: FormBuilder,
              private productService: ProductService,
              private primeNgConfig: PrimeNGConfig,
              private route: Router) { }

  ngOnInit(): void {
    this.productService.recupererProduit().subscribe({
      next: (products) => {
        this.products = products;
      }
    })
    this.productForms = this.productForm.group({
        nom:['',Validators.required],
        prix:['',Validators.required]
    })
    this.primeNgConfig.setTranslation({
      startsWith: 'Commence par',
      contains: 'Contient',
      notContains: 'Ne contient pas',
      endsWith: 'Fini par',
      equals: 'Egale à',
      notEquals: 'Différent de',
      noFilter: 'Pas de filtre',
      reject: 'Non',
      accept: 'Oui'
    });
  }

  addProduct(): void{}

  ouvrirModaleEdition() {
   this.visible = !this.visible
  }
  productDetail(id:string) {
    this.route.navigate(['accueil/productDetail', id]);
  }

}
