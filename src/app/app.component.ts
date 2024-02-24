import { Component, OnInit } from '@angular/core';
import { LoadingService } from './Module/shared/service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.setLoadingState(true);
    setTimeout(() => {
      this.loadingService.setLoadingState(false);
    }, 3000);
  }

  getLoadingService(): LoadingService {
    return this.loadingService;
  }
}
