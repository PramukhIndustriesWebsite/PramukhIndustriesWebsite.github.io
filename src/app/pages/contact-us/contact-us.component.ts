import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly open = open;
  protected readonly window = window;

  openLinkInNewTab(url: string): void {
    window.open(url, '_blank');
  }
}
