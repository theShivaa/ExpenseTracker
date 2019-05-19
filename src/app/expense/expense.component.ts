import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { InitialData } from '../data/initial-data';
import { ExpenseBean } from './expense.bean';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExpenseComponent>,public initialData:InitialData) { }
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  expense:ExpenseBean
  selected
  datea
  amount
  categorya
  categories= [
    'House Hold',
    'Food',
    'Taxi',
    'Grocery',
    'Other'
  ]
  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  convert(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
    return [ mnth, day,date.getFullYear()  ].join("/");
}

  addExpense(){
    console.log(this.datea,this.amount,this.selected);
    this.initialData.addData({
      'date':this.convert(this.datea),
      'amount':this.amount,
      'category':this.selected

    });
    this.dialogRef.close();
  }
}
