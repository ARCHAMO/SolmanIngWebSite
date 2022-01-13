import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ApiComsumerService } from 'src/app/services/api-comsumer.service';

@Component({
    selector: 'app-service-section',
    templateUrl: './service-section.component.html',
    styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

    public arrayServices: Service[] = [];

    constructor(
        private apiConsumer: ApiComsumerService
    ) {
    }

    ngOnInit() {
        this.apiConsumer.getMethod('services').subscribe(
            (response: any) => {
                response.docs.forEach(element => {
                    this.arrayServices.push(element);
                });
            },
            error => {
                console.log(error);
            },
            () => {

            }
        );
    }

    masDetalles() {

    }

}
