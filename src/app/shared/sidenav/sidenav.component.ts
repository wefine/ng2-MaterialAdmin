import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.html',
    styleUrls: ['./sidenav.css']
})
export class SidenavComponent implements OnInit {

    name: String = 'Material Admin';

    constructor() { }

    ngOnInit() { }
}
