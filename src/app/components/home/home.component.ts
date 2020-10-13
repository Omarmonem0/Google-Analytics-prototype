import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  sendEvent() {
    this.googleAnalyticsService.sendToGoogleAnalytics({
      name: 'home_button_clicked',
      category: 'home',
      action: null,
      label: 'click',
      value: 1
    });
  }

}
