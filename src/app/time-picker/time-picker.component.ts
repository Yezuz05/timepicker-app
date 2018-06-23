import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition
// } from '@angular/animations';

import * as moment from 'moment';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css'],
  // animations: [
  //   trigger('move', [
  //     state('right', style({
  //       transform: 'translateX(-300px)'
  //     })),
  //     state('left', style({
  //       transform: 'translateX(50px)'
  //     })),
  //     transition('* => right', animate('1s')),
  //     transition('right => left', animate('1s')),
  //     transition('active => inactive', animate('1s'))
  //   ])
  // ]
})
export class TimePickerComponent implements OnInit {
  @Input() time;
  @Output() timeChanged = new EventEmitter();
  chosenTime;
  timeBoard = false;
  timest = '';
  currentSlide = 1;

  constructor() { }

  ngOnInit() {
    console.log(moment().hours());
    if (this.time && moment(this.time).isValid()) {
      this.chosenTime = moment().hour(this.time).format('h:00 a');
    } else {
      this.chosenTime = moment().format('h:00 a');
      this.timeChanged.emit(parseInt(this.chosenTime, 10));
      throw new Error('Invalid time passed :( . \n Current hour is used :)');
    }
  }

  toggleBoard() {
    this.timeBoard = !this.timeBoard;
  }

  display(num) {
    return moment().hour(num).format('h:00 a');
  }
  setTime(num) {
    this.chosenTime = moment().hour(num).format('h:00 a');
    console.log(parseInt(this.chosenTime, 10));
    this.timeChanged.emit(parseInt(this.chosenTime, 10));
    this.timeBoard = !this.timeBoard;
  }
  moveRight() {
    // if (this.currentSlide === 6) { return; }
    // if (this.currentSlide === 1) { this.right = true; }
    // this.stop = false;
    // this.left = false;
    // setTimeout(() => { this.stop = true; this.currentSlide++; }, 2000);
  }
  moveLeft() {
    // if (this.currentSlide === 0) { return; }
    // this.stop = false;
    // this.right = false;
    // this.left = true;
    // setTimeout(() => { this.stop = true; this.currentSlide--; }, 2000);
  }
}
