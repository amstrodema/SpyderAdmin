import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentsComponent } from './dashboard-components.component';
import { DashboardPublicComponent } from './dashboard-public/dashboard-public.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponentsComponent, DashboardPublicComponent],
  exports: [DashboardPublicComponent]
})
export class DashboardComponentsModule { }
