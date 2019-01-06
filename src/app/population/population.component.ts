import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'life-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  barChart: [];
  lineChart: [];
  populations: any[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://api.population.io:80/1.0/population/1990/Slovak%20Republic/')
      .subscribe(response => {
        //console.log(response.json());

        // parsovanie dat z JSONU
        let males: string = JSON.parse(response['_body']).map(response => response.males);
        let females: string = JSON.parse(response['_body']).map(response => response.females);
        let age: number = JSON.parse(response['_body']).map(response => response.age);
        // response
        this.populations = response.json();

        // BAR chart
        this.barChart = new Chart("barChart", {
          type: 'bar',
          data: {
            // OS X
            // vek
            labels: age,
            datasets: [
              // OS Y
              // muzi
              {
                label: 'Males',
                data: males,
                fill: false,
                lineTension: 0.2,
                borderColor: "#FF4136"
              },
              {
                //zeny
                label: 'Females',
                data: females,
                fill: false,
                lineTension: 0.2,
                borderColor: "#2ECC40"
              },
            ]
          },
          options: {
            title: {
              text: "Population in Slovakia in 1990 [18-30 years]",
              suggestedMin: 15,
              display: true
            },
            scales: {
              yAxes: [{
                ticks: {
                  suggestedMin: 15,
                  beginAtZero: true,
                }
              }]
            }
          }
        })
        // koniec bar chart

        // chart
        this.lineChart = new Chart("lineChart", {
          type: 'line',
          data: {
            // OS X
            labels: age,
            datasets: [
              // OS Y
              // muzi
              {
                label: 'Males',
                data: males,
                fill: false,
                lineTension: 0.2,
                borderColor: "#FF4136"
              },
              {
                //zeny
                label: 'Females',
                data: females,
                fill: false,
                lineTension: 0.2,
                borderColor: "#2ECC40"
              },
            ]
          },
          options: {
            title: {
              text: "Population in Slovakia in 1990 [18-30 years]",
              suggestedMin: 15,
              display: true
            },
            scales: {
              yAxes: [{
                ticks: {
                  suggestedMin: 15,
                  beginAtZero: true,
                }
              }]
            }
          }
        })
        // koniec line chart
      })
  }

}

