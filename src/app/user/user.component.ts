import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'leo-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  pageTile = 'Font end page';
  constructor(private _title: Title) {}

  ngOnInit() {
    this._title.setTitle(this.pageTile)
  }
}
