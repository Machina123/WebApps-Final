import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesModuleComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heroes', component: HeroesModuleComponent, loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
