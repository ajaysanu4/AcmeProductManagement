import { AppRoutingModule } from "./../app-routing.module";
import { WelcomeModule } from "./../welcome/welcome.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";

@NgModule({
  declarations: [DefaultComponent],
  imports: [BrowserModule, WelcomeModule, AppRoutingModule],
  providers: [],
  bootstrap: [DefaultComponent]
})
export class DefaultModule {}
