import { Component, Input, OnInit } from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() day: Day;
  @Input() selected: boolean;

  constructor() {
    this.day = new Day(0, new Date());
    this.selected = false;
  }

  ngOnInit(): void {
  }

}
