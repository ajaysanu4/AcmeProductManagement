import { Component, OnInit } from "@angular/core";
import { ProductService } from "../Services/product.service";
import { IProduct } from "../Entity/product";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = "Product Detail";
  errorMessage: string = "";
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get("id");
    if (param) {
      const id = +param;
      this.productService
        .getProduct(id)
        .subscribe(
          product => (this.product = product),
          error => (this.errorMessage = <any>error)
        );
    }
  }

  onBack = () => {
    this.router.navigate(["/products"]);
  };
}
