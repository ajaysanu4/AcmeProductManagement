import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedComponent } from "./shared.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule, BrowserModule],
  bootstrap: [SharedComponent],
  exports: [SharedComponent,FormsModule]
})
export class SharedModule {}
