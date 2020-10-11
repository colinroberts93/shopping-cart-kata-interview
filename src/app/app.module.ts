import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list.component";
import { ShoppingCartComponent } from "./shopping-cart.component";
import { ProductComponent } from "./product.component";
import { CartProductComponent } from "./cart-product.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ProductComponent,
    CartProductComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}