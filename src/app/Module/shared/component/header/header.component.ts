import { Component } from '@angular/core';
declare const feather: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ngAfterViewInit() {
    feather.replace();
  }
}
