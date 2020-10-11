import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "product",
  template: `
    <div>{{ product.name }}</div>
    <button (click)="addProductToCart(product)">+</button>
    <div>
      {{
        product.price.toLocaleString("en-UK", {
          style: "currency",
          currency: "GBP"
        })
      }}
    </div>
  `
})
export class ProductComponent {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}