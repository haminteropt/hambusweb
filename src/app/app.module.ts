import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatNativeDateModule, MatSelectModule, MatSlideToggleModule,
  MatTabsModule, MatProgressSpinnerModule, MatRadioModule,
  MatChipsModule, MatCardModule, MatDatepickerModule, MatInputModule,
  MatAutocompleteModule, MatToolbarModule, MatIconModule, MatMenuModule,
  MatCheckboxModule, MatButtonModule, MatStepperModule, MatDivider, MatDividerModule, MatCardActions
} from '@angular/material';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutes } from './app.routes';
import { RigBusComponent } from './components/rig-bus/rig-bus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RigBusComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
