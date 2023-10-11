import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardArr: Array<string> = ['card 1', 'card 2', 'card 3', 'card 4',]
  cardList = {
    applications: 6,
    emailRequests: 26,
    unsubscribers: 3,
    users: 11,
  };
  constructor(private dashboardSvc: DashboardService) { }


  ngOnInit(): void {
    console.log('om onit ')
    this.getDashboardData();
  }

  getDashboardData() {
    this.dashboardSvc.getDashboardStatistics().subscribe({
      next: (res) => { console.log('dashboard ', res) },
      error: (err) => { },
    })
  }

}
