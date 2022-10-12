import { Component, OnInit } from '@angular/core';
import { Day } from './selector/day';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  days: Array<Day> = [];
  form!: FormGroup;
  public multiple = true;


  constructor(private formBuilder: FormBuilder) {
    for (let i = 0; i < 100; i++) {
      this.days.push(new Day(i, new Date(i * 86400000))); // 1000 * 3600 * 24 (cálculo de milisegundos que tiene un día)
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      selectedDays: [[this.days[0]]]
    });
  }

  log(){
    alert(JSON.stringify(this.form.value));
  }

  changeMode(){
    this.multiple = !this.multiple;
  }
}

