import { RouterModule, Routes } from '@angular/router';

import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CoffeePageComponent } from './components/pages/coffee-page/coffee-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'search/:searchTerm', component:HomeComponent},
  { path:'tag/:tag', component:HomeComponent},
  { path:'coffee/:id', component:CoffeePageComponent},
  { path:'cart-page', component:CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
