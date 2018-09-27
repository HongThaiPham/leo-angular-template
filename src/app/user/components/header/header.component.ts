import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'leo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  navToggled = new EventEmitter();
  navOpen = false;

  constructor(private router: Router,
    public auth: AuthService) {}

  ngOnInit() {
    // If nav is open after routing, close it
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart && this.navOpen))
      .subscribe(event => this.toggleNav());
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }
}
