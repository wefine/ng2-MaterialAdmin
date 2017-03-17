import { Component, OnInit, Input } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

    scrollbaConfig: PerfectScrollbarConfigInterface = {
        wheelSpeed: 20
    };

    constructor() {
    }

    ngOnInit() { }
}
