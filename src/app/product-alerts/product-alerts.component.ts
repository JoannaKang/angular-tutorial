import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({ //-> provide metadata about the component, This indicates that the following class is a component
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {
  // @Input() decorator indicates that the property value passes in from the component's parent (===the product list component)
  @Input() product;
  @Output() notify = new EventEmitter(); //이 이벤트를 외부로 내보낸다.
  constructor() { }

  ngOnInit() {
  }

}