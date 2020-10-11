import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "cart-product",
  template: `
    <div *ngIf="product">
      <div>{{ product.name }}</div>
      <input
        type="number"
        [(ngModel)]="product.num"
        min="0"
        (ngModelChange)="modelChanged($event)"
      />
    </div>
  `
})
export class CartProductComponent {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter();
  modelChanged(product) {
    if (this.product.num === 0) {
      this.productRemoved.emit(this.product);
    }
  }
}