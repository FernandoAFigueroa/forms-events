import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from './../../interfaces/car/car.interface';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent implements OnInit {
  @Input() car: ICar;
  @Output() buyEvent: EventEmitter<ICar> = new EventEmitter<ICar>();
  @Output() notInterestedEvent: EventEmitter<string> =
    new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onBuy() {
    this.buyEvent.emit(this.car);
  }

  onNotInterested() {
    this.notInterestedEvent.emit(`No estoy interesado.`);
  }
}
