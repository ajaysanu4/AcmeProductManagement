import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WelcomeComponent } from "./welcome.component";

import { ProductDetailsModule } from "../product-details/product-details.module";
import { ProductModule } from "../product/product.module";

@NgModule({
  declarations: [WelcomeComponent],
  imports: [BrowserModule, CommonModule, ProductModule],
  exports: [WelcomeComponent],
  bootstrap: [WelcomeComponent]
})
export class WelcomeModule {}
