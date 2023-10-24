import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products = [
    {
      productId: '1',
      productName: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      image: 'pic.png',
      price: 99.0,
      label: 'جديد',
    },
    {
      productId: '2',
      productName: 'تيشيرت-كم قصير-آرت وير-رجالي-ملابس',
      image: 'pic(1).png',
      price: 109.0,
      label: 'جديد',
    },
    {
      productId: '3',
      productName: 'جوال جالاكسي 20',
      image: 'pic(2).png',
      price: 7209.0,
      label: 'جديد',
    },
    {
      productId: '4',
      productName: 'جوال جالاكسي 22',
      image: 'pic(3).png',
      price: 12209.0,
      label: 'عرض',
    },
    {
      productId: '5',
      productName: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
      image: 'pic.png',
      price: 99.0,
      label: 'جديد',
    },
    {
      productId: '6',
      productName: 'تيشيرت-كم قصير-آرت وير-رجالي-ملابس',
      image: 'pic(1).png',
      price: 109.0,
      label: 'جديد',
    },
    {
      productId: '7',
      productName: 'جوال جالاكسي 20',
      image: 'pic(2).png',
      price: 7209.0,
      label: 'عرض',
    },
    {
      productId: '8',
      productName: 'جوال جالاكسي 22',
      image: 'pic(3).png',
      price: 12209.0,
      label: 'جديد',
    },
  ];
  products2 = [
    {
      productId: '4',
      productName: 'سلسلة فضي',
      image: 'pic(4).png',
      price: 209.0,
    },
    {
      productId: '6',
      productName: 'تيشيرت-كم قصير-آرت وير-اطفال',
      image: 'pic(5).png',
      price: 209.0,
    },
    {
      productId: '7',
      productName: 'تيشيرت-كم طويل-آرت وير',
      image: 'pic(6).png',
      price: 209.0,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
