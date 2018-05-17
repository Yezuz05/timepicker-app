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
  right = false;
  left = false;
  stop = false;
  timest = '';
  time1 = 0;
  time2 = 1;
  time3 = 2;
  time4 = 3;
  currentSlide = 1;

  constructor() { }

  ngOnInit() {
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
    if (this.time4 === 23) { return; }
    this.time1++;
    this.time2++;
    this.time3++;
    this.time4++;
  }
  moveLeft() {
    // if (this.currentSlide === 0) { return; }
    // this.stop = false;
    // this.right = false;
    // this.left = true;
    // setTimeout(() => { this.stop = true; this.currentSlide--; }, 2000);
    if (this.time1 === 0) { return; }
    this.time1--;
    this.time2--;
    this.time3--;
    this.time4--;
  }
}
