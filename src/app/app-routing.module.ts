import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forRoot() is used for the root module to configure the router.
  exports: [RouterModule], // export the router directives to be available in throughout the app.
})
export class AppRoutingModule {}
