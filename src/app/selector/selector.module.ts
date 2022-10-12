import {NgModule} from '@angular/core';
import {SelectorComponent} from './selector.component';
import { DayComponent } from './day/day.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
  exports: [SelectorComponent],
  declarations: [SelectorComponent, DayComponent],
  providers: [],
})
export class SelectorModule {
}
