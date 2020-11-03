import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeatureComponent} from './feature/feature.component';
import {PricingComponent} from './pricing/pricing.component';
import {HomeComponent} from './home/home.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: 'features', component: FeatureComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
