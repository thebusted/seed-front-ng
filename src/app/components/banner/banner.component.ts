import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RoutesRecognized } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  public full: boolean;
  public pageName: String;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => {
        let child = this.route.firstChild;
        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
          } else if (child.snapshot.data && child.snapshot.data['title']) {
            return child.snapshot.data['title'];
          } else {
            return null;
          }
        }
        return null;
      })
      .subscribe(title => {
        // Set page name
        this.pageName = title;

        // Set banner type
        this.full = this.isFull();
      });
  }

  private isFull(): boolean {
    const route = this.router.url.replace(/^\/(.*)/, '$1');
    if (route === 'home') {
      return true;
    }

    return false;
  }
}
