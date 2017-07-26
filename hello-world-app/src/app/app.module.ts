import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorOneComponent } from './calculator/calculatorOne.component';
import { CalculatorTwoComponent } from './calculator/calculatorTwo.component';
import { CalculatorResultComponent } from './calculator/calculatorResult.component';


@NgModule({
  //UI entities
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorOneComponent,
    CalculatorTwoComponent,
    CalculatorResultComponent
  ],
  //Other dependent Modules
  imports: [
    BrowserModule,
    FormsModule
  ],
  //Non UI entities
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
