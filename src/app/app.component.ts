import { Component } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
// import { ChartDataSets, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  // Pie
  title = 'design';
  
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions  = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  

  public pieChartLabels: Label[] = [['Feedback'], ['Shortlisted'], 'Rejected'];
  public pieChartData: SingleDataSet = [450, 250, 300];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
}