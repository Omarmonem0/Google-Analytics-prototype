import { Injectable } from '@angular/core';
// tslint:disable-next-line: ban-types
declare let gtag: Function;
export interface IEvent {
  name: string;
  category: string;
  action: string;
  label: string;
  value: number;
}
@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() {

  }

  public sendToGoogleAnalytics(event: IEvent) {
    gtag('event', event.name, {
      eventCategory: event.category,
      eventLabel: event.label,
      eventAction: event.action,
      eventValue: event.value
    });
  }
}
