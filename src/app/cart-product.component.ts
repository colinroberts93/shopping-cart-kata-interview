import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "cart-product",
  template: `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <div *ngIf="product">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">
            {{
              product.price.toLocaleString("en-UK", {
                style: "currency",
                currency: "GBP"
              })
            }}
          </p>
          <input
            type="number"
            [(ngModel)]="product.num"
            min="0"
            (ngModelChange)="modelChanged($event)"
          />
        </div>
      </div>
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