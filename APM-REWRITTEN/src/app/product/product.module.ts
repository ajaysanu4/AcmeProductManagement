import { ProductDetailsComponent } from "./../product-details/product-details.component";
import { AppRoutingModule } from "./../app-routing.module";
import { ProductDetailsModule } from "./../product-details/product-details.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [ProductComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ProductDetailsModule,
    AppRoutingModule
  ],
  exports: [ProductComponent],
  bootstrap: [ProductComponent]
})
export class ProductModule {}
