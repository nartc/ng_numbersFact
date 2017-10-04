import { ButtonModule, CalendarModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
        ButtonModule,
        CalendarModule
    ],
    exports: [
        ButtonModule,
        CalendarModule
    ]
})

export class PrimeNgImports {}