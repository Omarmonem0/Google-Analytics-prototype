import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

declare var gtag;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-GA';
  constructor(private router: Router) {
    const navigations = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );

    navigations.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-180339683-1', {
        page_path: event.urlAfterRedirects
      });
    });
  }
}
