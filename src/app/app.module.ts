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
import { NewsComponent } from './components/news/news.component';
import { JoinComponent } from './components/join/join.component';
import { SwaggerComponent } from './components/swagger/swagger.component';
import { BusStandardsComponent } from './components/busstandards/busstandards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RigBusComponent,
    NewsComponent,
    JoinComponent,
    SwaggerComponent,
    BusStandardsComponent
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
