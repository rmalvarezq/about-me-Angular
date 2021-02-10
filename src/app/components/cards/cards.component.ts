import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }
  changeColorJS(newColor) {
    var elem = document.getElementById('diferentColor');
    var elem1 = document.getElementsByTagName('diferentColor');
    // var elem = document.getElementsByClassName('diferentColor');
    elem.style.color = newColor;
  }
}
