import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { element } from '@angular/core/src/render3';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { InitialData } from '../data/initial-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public initalData:InitialData) {}

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Grocery', 'House Hold', 'Other','Food','Taxi'];
  public pieChartData=[0,0,0,0,0] ;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnInit(): void {
    this.initalData.getData()
        .subscribe(data=>{
          this.getCount(data);
        })
  }

  getCount(data:any){

    for(let d of data){
      if(d.category==='Grocery'){
        this.pieChartData[0]=this.pieChartData[0]+d.amount;
      }
      if(d.category==='Other'){
        this.pieChartData[2]=this.pieChartData[2]+d.amount;
      }
      if(d.category==='Food'){
        this.pieChartData[3]=this.pieChartData[3]+d.amount;
      }
      if(d.category==='Taxi'){
        this.pieChartData[4]=this.pieChartData[4]+d.amount;
      }
      if(d.category==='House Hold'){
        this.pieChartData[1]=this.pieChartData[1]+d.amount;
      }
    }
  }

}

