import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "shopping-cart",
  template: `
    <h1>Shopping Cart ({{ calcTotal() }})</h1>
    <h2>Total Cost £{{ calcPrice().toFixed(2) }}</h2>
    <cart-product
      *ngFor="let product of products"
      [product]="product"
      (productRemoved)="removeProduct($event)"
      ><cart-product> </cart-product
    ></cart-product>
  `
})
export class ShoppingCartComponent {
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();
  calcTotal() {
    return this.products.reduce((acc, prod) => (acc += prod.num), 0);
  }
  calcPrice() {
    return this.products.reduce((acc, prod) => {
      if (this.calcTotal() >= 10) {
        return (acc += prod.price.substring(1) * prod.num * 0.5);
      } else if (this.calcTotal() >= 5) {
        return (acc += prod.price.substring(1) * prod.num * 0.75);
      } else {
        return (acc += prod.price.substring(1) * prod.num);
      }
    }, 0);
  }

  removeProduct(product) {
    this.productRemoved.emit(product);
  }
}