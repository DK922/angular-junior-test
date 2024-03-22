import { Component, Input } from '@angular/core';
import { IProduct } from '../model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: IProduct[] = []
  filter(){
    let min=15;
    let max=50;
    this.products = this.products.filter(product => {
      return product.price >= min && product.price <= max;
    })
  }

}
