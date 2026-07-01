import {Routes} from '@angular/router';
import {CarbonFootprint} from './features/carbon-footprint/carbon-footprint';
import {Home} from './features/home/home';
import {Profile} from './features/profile/profile';
import {MainLayout} from './shared/components/main-layout/main-layout';

export const routes: Routes = [
  {path: "login", component: Home},
  {
    path: "", component: MainLayout,  children: [
      {path : "", redirectTo : "mon-empreinte-carbone", pathMatch : 'full'},
      {path: "mon-empreinte-carbone", component: CarbonFootprint},
      {path: "profile/:username", component: Profile}
    ]
  }

];
