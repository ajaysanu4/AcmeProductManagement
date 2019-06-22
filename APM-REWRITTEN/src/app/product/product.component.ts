import { ProductService } from "../Services/product.service";
import { Component, OnInit } from "@angular/core";
import { IProduct } from "../Entity/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  //pageTitle: string = "Product List";
  pageTitle: string = "Welcome";
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: any;

  // setter getter for filter operation
  _listFilter: string = "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  constructor(private productService: ProductService) {}

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  //perform filter method
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onRatingClicked = (message: string) => {
    this.pageTitle = "Product List: " + message;
  };

  toggleImage = () => {
    this.showImage = !this.showImage;
  };
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
