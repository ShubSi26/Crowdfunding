import { Component, OnInit } from '@angular/core';
import $ from 'jquery'; 

@Component({
  selector: 'app-bodycomp',
  templateUrl: './bodycomp.component.html',
  styleUrls: ['./bodycomp.component.css']
})
export class BodycompComponent{
  constructor() {}

}
$(document).ready(function(){
  $('#a').parent().mouseenter(function() {
    let currentNumber = 0;
    const targetNumber = 4928513;
    let increment = 1;
    const intervalTime = 2;

    const interval = setInterval(function() {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(interval);
      }
      increment *= 1.1;
      $('#a').text(Math.floor(currentNumber).toLocaleString('en-US') + "$+");
    }, intervalTime);
  });
  $('#b').parent().mouseenter(function() {
    let currentNumber = 0;
    const targetNumber = 1000000;
    let increment = 1;
    const intervalTime = 2;

    const interval = setInterval(function() {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(interval);
      }
      increment*=1.1;
      $('#b').text(Math.floor(currentNumber).toLocaleString('en-US') + "+");
    }, intervalTime);
  });
  $('#c').parent().mouseenter(function() {
    let currentNumber = 0;
    const targetNumber = 50000;
    let increment = 1;
    const intervalTime = 2;

    const interval = setInterval(function() {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(interval);
      }
      increment*=1.1;
      $('#c').text(Math.floor(currentNumber).toLocaleString('en-US') + "+");
    }, intervalTime);
  });
});

