import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { WINDOW } from '@ng-toolkit/universal';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'leo-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  pageTile = 'Font end page';
  navOpen: boolean;
  minHeight: string;
  private _initWinHeight = 0;

  constructor(@Inject(WINDOW) private window: Window, private _title: Title) {}

  ngOnInit() {
    this._title.setTitle(this.pageTile);
    fromEvent(this.window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(event => this._resizeFn(event));
    this._initWinHeight = this.window.innerHeight;
    this._resizeFn(null);
  }

  navToggledHandler(e: boolean) {
    this.navOpen = e;
  }



  private _resizeFn(e) {
    const winHeight: number = e ? e.target.innerHeight : this._initWinHeight;
    this.minHeight = `${winHeight}px`;
  }
}
