import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular2-highcharts';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        FlexLayoutModule,
        CommonModule,
        PerfectScrollbarModule,
        ChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBLA53ui8-Tqs57XPl8XWpKcKDh2wGrc6E'
        })
    ],
    exports: [
        DashboardComponent
    ]
})
export class ComponentsModule {

}
