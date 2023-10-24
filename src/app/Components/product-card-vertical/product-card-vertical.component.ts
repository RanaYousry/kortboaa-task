import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-vertical',
  templateUrl: './product-card-vertical.component.html',
  styleUrls: ['./product-card-vertical.component.scss'],
})
export class ProductCardVerticalComponent implements OnInit {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() price: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
