import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-shared",
  templateUrl: "./shared.component.html",
  styleUrls: ["./shared.component.css"]
})
export class SharedComponent implements OnInit {
  ngOnInit() {}
  @Input() rating;
  starWidth: number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
  onClick = () => {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  };
}
