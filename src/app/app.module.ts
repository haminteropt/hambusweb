import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatNativeDateModule, MatSelectModule, MatSlideToggleModule,
  MatTabsModule, MatProgressSpinnerModule, MatRadioModule,
  MatChipsModule, MatCardModule, MatDatepickerModule, MatInputModule,
  MatAutocompleteModule, MatToolbarModule, MatIconModule, MatMenuModule,
  MatCheckboxModule, MatButtonModule, MatStepperModule, MatDivider, MatDividerModule, MatCardActions
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
