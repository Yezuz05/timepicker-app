import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Time Picker App';
  time = moment().hour();

  constructor() {}

  ngOnInit() {}

  setTime(pickertime) {
    this.time = pickertime;
  }
}
