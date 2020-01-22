import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
  @ViewChild('barChart') barChart;
  @ViewChild('gewinnChart') gewinnChart;


  sportart = 'Laufen';
  pet = 'puppies';

  bars: any;
  gewinn: any;
  colorArray: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    this.createBarChart();
  }

  ionViewCanEnter() {
    return this.authProvider.authenticated();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Distanz',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgba(0, 0, 0, 0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(2, 109, 158)',// array should have same number of elements as number of dataset
          borderWidth: 1
        },
        {
          label: 'Verlorene Kalorien',
          data: [6, 3, 7.5, 5, 1, 2.3, 10, 15],
          backgroundColor: 'rgba(0, 0, 0, 0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(0, 0, 0)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


    this.gewinn = new Chart(this.gewinnChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Distanz',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgba(0, 0, 0, 0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(2, 109, 158)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  getDashboardBySportart(event) {
    this.sportart = event;
  }
}
