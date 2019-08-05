import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { StoresComponent } from './pages/stores/stores.component';
import { UsersComponent } from './pages/users/users.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { InventoriesComponent } from './pages/inventories/inventories.component';
import { ReportsComponent } from './pages/reports/reports.component';


const routes: Routes = [
	{ 
		path: "", component: DashboardComponent,
		children: [
			{ path: "", redirectTo: "overview" },
			{ path: "overview", component: OverviewComponent },
			{ path: "stores", component: StoresComponent },
			{ path: "users", component: UsersComponent },
			{ path: "customers", component: CustomersComponent },
			{ path: "inventories", component: InventoriesComponent },
			{ path: "reports", component: ReportsComponent }
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
