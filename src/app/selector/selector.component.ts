import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Day } from './day';

export const CUSTOMINPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectorComponent),
  multi: true,
};

export const CUSTOMINPUT_VALUE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => SelectorComponent),
  multi: true,
};

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  providers: [CUSTOMINPUT_VALUE_ACCESSOR, CUSTOMINPUT_VALUE_VALIDATOR]
})
export class SelectorComponent implements ControlValueAccessor {
  @Input() days: Array<Day>;
  @Input() multiple: boolean;
  @Input() innerSelectedDays: Array<Day> = [];
  @Output() selectedDaysEmitter = new EventEmitter<Array<Day>>();


  constructor() {
    this.days = [];
    this.multiple = false;
  }

  public dayClicked(element: Day) {
    if (this.multiple) {
      const found = this.innerSelectedDays.findIndex((day) => day.id === element.id);
      if (found >= 0) {
        this.innerSelectedDays.splice(found, 1);
        return;
      }
      this.innerSelectedDays.push(element);
    }
    else {
      this.innerSelectedDays = [element];
    }
  }

  // Esto es necesario para poder implementar la interfaz ControlValueAccessor
  // que nos permite trabajar con formularios personaizados
  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

  // ControlValueAccessor Interface
  writeValue(value: Array<Day>) {
    if (value !== this.innerSelectedDays) {
      this.innerSelectedDays = value;
    }
  }

  // ControlValueAccessor Interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // ControlValueAccessor Interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
