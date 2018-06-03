import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RigBusComponent } from './components/rig-bus/rig-bus.component';
import { JoinComponent } from './components/join/join.component';
import { SwaggerComponent } from './components/swagger/swagger.component';
import { BusStandardsComponent } from './components/busstandards/busstandards.component';
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rigBus',
    component: RigBusComponent
  },
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: 'swagger',
    component: SwaggerComponent
  },
  {
    path: 'busstandards',
    component: BusStandardsComponent
  }
];
