import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailsComponent } from "./product-details.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [BrowserModule, CommonModule, SharedModule],
  exports: [ProductDetailsComponent],
  bootstrap: [ProductDetailsComponent]
})
export class ProductDetailsModule {}
