import { ProductComponent } from "./../product/product.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./../app-routing.module";
import { WelcomeModule } from "./../welcome/welcome.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { ProductModule } from "../product/product.module";

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    BrowserModule,
    WelcomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [DefaultComponent]
})
export class DefaultModule {}
