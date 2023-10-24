import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() price: number = 0;
  @Input() label: string = '';


  constructor() {}

  ngOnInit(): void {}
}
