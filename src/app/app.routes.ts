import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RigBusComponent } from './components/rig-bus/rig-bus.component';
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rigBus',
    component: RigBusComponent
  }
];
