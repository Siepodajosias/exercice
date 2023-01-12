import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   configUrl: string ="api/product.json";
  constructor(private http: HttpClient) { }

  recupererProduit(): Observable<Product[]>{
     return this.http.get<Product[]>(this.configUrl);
  }
}
