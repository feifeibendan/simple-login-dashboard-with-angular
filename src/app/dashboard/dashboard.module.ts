import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { UsersComponent } from './pages/users/users.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { StoresComponent } from './pages/stores/stores.component';
import { InventoriesComponent } from './pages/inventories/inventories.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [OverviewComponent, UsersComponent, CustomersComponent, StoresComponent, InventoriesComponent, ReportsComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
