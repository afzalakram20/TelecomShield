import { Component, OnInit } from '@angular/core';
import { graphServices } from 'src/app/services/dashboard/dashboard-graph.services';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard-graphs',
  templateUrl: './dashboard-graphs.component.html',
  styleUrls: ['./dashboard-graphs.component.scss']
})
export class DashboardGraphsComponent implements OnInit {
  chart: any = [];
  pieChart: any = [];
  constructor(private service: graphServices) { }

  ngOnInit() {
    this.getDounetGraph();
    this.getPieChart();
  }
  getDounetGraph() {
    this.service.getDounetGraphData().subscribe((res: any) => {

      let data = res;
      let CreatedDates = [];
      let ids = [];
      let records = [];
      data.forEach(element => {
        let CrDate = element.AddedDate;
        let id = element.Id;
        let record = element.PhoneNumber;
        ids.push(id);
        CreatedDates.push(CrDate);
        records.push(record);

      });
      this.chart = new Chart('doughnut',

        {
          type: 'doughnut',
          data: {
            labels: ["Africa", "Asia"],
            datasets: [
              {
                label: "Population (millions)",
                backgroundColor: ["red", "gray"],
                data: [2478, 5267]
              }
            ]
          },
          options: {
            legend: {
              position: 'right'
            },

          }

        }
      )
    })
  }

  getPieChart() {

    this.pieChart = new Chart('pieChart',

      {
        type: 'pie',
        data: {
          labels: ["Africa", "Asia", "Kashmir"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["red", "gray", "blue",],
              data: [30, 20, 50,]
            }
          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'right'
          },

        }

      }
    )






  }




}
