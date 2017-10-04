import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PrimeNgImports } from './primeng-imports/primeng.module';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FactListComponent } from './components/fact-list/fact-list.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    FactListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
