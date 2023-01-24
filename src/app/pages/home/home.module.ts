import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardComponentsModule } from 'src/app/dashboard-components/dashboard-components.module';

@NgModule({
  imports: [
    CommonModule, DashboardComponentsModule
  ],
  declarations: [HomeComponent, DashboardComponent]
})
export class HomeModule { }
