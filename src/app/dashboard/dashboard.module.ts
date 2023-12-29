import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './list/list.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ], providers: [
  ]
})
export class DashboardModule { }
