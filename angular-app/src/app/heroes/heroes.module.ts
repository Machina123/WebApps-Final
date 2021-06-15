import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeroesModuleComponent } from './heroes.component';



@NgModule({
  declarations: [
    HeroesModuleComponent,    
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
