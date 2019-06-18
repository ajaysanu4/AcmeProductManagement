import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "", component: WelcomeComponent },
  { path: "products", component: ProductComponent },
  { path: "product/:id", component: ProductDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
