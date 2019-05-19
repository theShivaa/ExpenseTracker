import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExpenseComponent } from '../expense/expense.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(public dialog: MatDialog) {}

  addExpense(): void {
      const dialogRef = this.dialog.open(ExpenseComponent, {
        width: '300px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    }


}
