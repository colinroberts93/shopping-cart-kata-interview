import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "product",
  template: `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <h6 class="card-title">{{ product.description }}</h6>
        <p class="card-text">
          {{
            product.price.toLocaleString("en-UK", {
              style: "currency",
              currency: "GBP"
            })
          }}
        </p>
        <p>
          Add To Basket
          <button
            class="btn btn-primary btn-sm"
            (click)="addProductToCart(product)"
          >
            +
          </button>
        </p>
      </div>
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