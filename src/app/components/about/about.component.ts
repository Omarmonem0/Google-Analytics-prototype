import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  sendEvent() {
    this.googleAnalyticsService.sendToGoogleAnalytics({
      name: 'about_button_clicked',
      category: 'about',
      action: null,
      label: 'click',
      value: 2
    });
  }

}
