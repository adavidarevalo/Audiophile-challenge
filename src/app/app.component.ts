import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router
  ){}
  title = 'Audiophile-challenge';
  ngOnInit() {
    console.log("yes")
    this.router.events.subscribe((evt) => {
      console.log(evt)
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}
}
