import { Component, ElementRef, HostListener } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SidenavContainer } from './containers/sidenav.container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends SidenavContainer {
  title = 'Dashboard';

  constructor() {
    super();
  }

}
