import { Component, OnInit } from '@angular/core';
import { InitialData } from './../data/initial-data';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  displayedColumns=['date','amount','category'];

  constructor(public initalData:InitialData) { }

  dataSource;

  ngOnInit() {
    this.initalData.getData()
        .subscribe(data=>{
          this.dataSource=data;
        })
  }


}
