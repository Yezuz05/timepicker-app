import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {
  chosenTime = moment().format('h:00 a');
  timeBoard = false;

  constructor() { }

  ngOnInit() {
    console.log(parseInt(this.chosenTime, 10));
  }

  toggleBoard() {
    this.timeBoard = !this.timeBoard;
  }
  times() {
    let _times = [];
   for(let i = 0; i <= 23; i++) {
     _times.push(i);
   }
   return _times;
  }
  display(num) {
    return moment().hour(num).format('h:00 a');
  }
  setTime(num) {
    this.chosenTime = moment().hour(num).format('h:00 a');
    this.timeBoard = !this.timeBoard;
  }
}
