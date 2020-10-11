import { Component } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Product } from "./products";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  readonly ROOT_URL = "https://my.api.mockaroo.com/test.json?key=373c6a30";
  products: Observable<Product[]>;
  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts() {
    this.products = this.http
      .get<Product[]>(this.ROOT_URL)
      .subscribe(result => {
        this.productList = result;
      });
  }

  productList = [];
  cartProductList = [];

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(
      productInCart => productInCart.name === product.name
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