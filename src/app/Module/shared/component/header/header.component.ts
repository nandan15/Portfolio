import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare const feather: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  ngAfterViewInit() {
    feather.replace();
  }

}
