  import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activeLinkNum = 0;
  @Output() changeActiveLink: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }

  setActiveLinkNum(num: number) {
    this.activeLinkNum = num;
    this.changeActiveLink.emit(num);
  }

}
