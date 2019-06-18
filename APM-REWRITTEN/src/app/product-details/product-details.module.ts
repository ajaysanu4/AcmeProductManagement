import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailsComponent } from "./product-details.component";

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [BrowserModule, CommonModule],
  exports: [ProductDetailsComponent],
  bootstrap: [ProductDetailsComponent]
})
export class ProductDetailsModule {}
