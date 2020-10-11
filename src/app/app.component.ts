import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  productList = [
    { name: "item one", price: 10 },
    { name: "item two", price: 20 },
    { name: "item three", price: 30 }
  ];
  cartProductList = [];
  
  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(
      ({ name }) => name === product.name
    );
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 });
      return;
    }
    productExistInCart.num += 1;
  }
  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(
      ({ name }) => name !== product.name
    );
  }
}