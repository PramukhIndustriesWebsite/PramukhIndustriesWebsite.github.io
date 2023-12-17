import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
  @ViewChild("accordianBtn") accordianBtn: ElementRef = new ElementRef<any>(null);
  ngAfterViewInit() {
    setTimeout(() => this.accordianBtn.nativeElement.click(), 1);
  }
}
