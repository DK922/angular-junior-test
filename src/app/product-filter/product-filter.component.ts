import { Component } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
public min: string="10";
public max: string="20";
onClick(){
  console.log(this.min, this.max)
}
}

