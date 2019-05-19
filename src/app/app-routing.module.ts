import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'
import { DataTableComponent } from './data-table/data-table.component';


const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
  },
  {
    path:'table-view',
    component:DataTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
