import {Component, OnInit} from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
    selector: 'app-service-section',
    templateUrl: './service-section.component.html',
    styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements OnInit {

    public arrayServices: Service[];

    constructor() {
    }

    ngOnInit() {
        this.arrayServices = [];
        let service = new Service();
        service.titulo = '<h2>Renovación de ambientes</h2>';
        service.subTitulo = '<p class="desc">Dale un cambio moderno a tu oficina.</p>';
        service.textoBoton = 'Mas detalle';
        service.rutaBoton = 'Mas detalle';
        service.iconoBoton = 'icon-arrow-right';
        service.icono = 'flaticon-shovel23';
        this.arrayServices.push(service);

        service = new Service();
        service.titulo = '<h2>Acompañamos la construcción</h2>';
        service.subTitulo = '<p class="desc">Proyectos a la medida de tus necesidades, con garantia de satisfacción.</p>';
        service.textoBoton = 'Leer mas';
        service.rutaBoton = 'Leer mas';
        service.iconoBoton = 'icon-arrow-right';
        service.icono = 'flaticon-shovel23';
        this.arrayServices.push(service);

        service = new Service();
        service.titulo = '<h2>Acompañamos la construcción</h2>';
        service.subTitulo = '<p class="desc">Proyectos a la medida de tus necesidades, con garantia de satisfacción.</p>';
        service.textoBoton = 'Leer mas';
        service.rutaBoton = 'Leer mas';
        service.iconoBoton = 'icon-arrow-right';
        service.icono = 'flaticon-shovel23';
        this.arrayServices.push(service);
    }

    masDetalles() {

    }

}
