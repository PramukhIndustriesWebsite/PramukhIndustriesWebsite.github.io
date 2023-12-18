  import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild("navbarToggler") navbarToggler: ElementRef = new ElementRef<any>(null);
  activeLinkNum = 0;
  open: boolean = false;
  @Output() changeActiveLink: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {

  }

  setActiveLinkNum(num: number) {
    this.activeLinkNum = num;
    this.changeActiveLink.emit(num);

    if(this.open) {
      this.navbarToggler.nativeElement.click();
    }
  }

  toggleOpen() {
    this.open = true;
  }

}
