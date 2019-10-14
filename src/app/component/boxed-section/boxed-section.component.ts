import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-boxed-section',
    templateUrl: './boxed-section.component.html',
    styleUrls: ['./boxed-section.component.css']
})
export class BoxedSectionComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    cotizanos() {
        alert('Vamos a la cotizacion Online');
    }

}
