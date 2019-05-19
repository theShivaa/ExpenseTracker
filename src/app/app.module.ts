import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseComponent } from './expense/expense.component';
import { MaterialModule } from './material.module';
import { DataTableComponent } from './data-table/data-table.component';
import { InitialData } from './data/initial-data';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    ExpenseComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    MaterialModule
  ],
  providers: [InitialData],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[ExpenseComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
