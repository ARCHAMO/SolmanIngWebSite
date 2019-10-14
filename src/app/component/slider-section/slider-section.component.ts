import { Component, OnInit } from '@angular/core';
import { SliderFront } from 'src/app/models/slider-front';

@Component({
    selector: 'app-slider-section',
    templateUrl: './slider-section.component.html',
    styleUrls: ['./slider-section.component.css']
})
export class SliderSectionComponent implements OnInit {

    public arraySlider: SliderFront[];

    constructor() {
    }

    ngOnInit() {
        this.arraySlider = [];
        let slider = new SliderFront();
        slider.titulo = '<p class="big-title">Acompañamos la construcción de <br> tus proyectos</p>';
        slider.subTitulo = 'Proyectos a la medida de tus necesidades, con garantia de satisfacción.';
        slider.textoBoton = 'Leer mas';
        slider.rutaBoton = 'Leer mas';
        slider.iconoBoton = 'icon-arrow-right';
        slider.urlImagen = 'assets/img/slider/slide1.jpg';
        this.arraySlider.push(slider);

        slider = new SliderFront();
        slider.titulo = '<p class="big-title">Haz que suceda Ahora!</p>';
        slider.subTitulo = 'La visión de cambio esta en tus manos, solo tu sabes cuando hacer la diferencia.';
        slider.textoBoton = 'Contactenos';
        slider.rutaBoton = 'Contactenos';
        slider.iconoBoton = 'icon-arrow-right';
        slider.urlImagen = 'assets/img/slider/slide2.jpg';
        this.arraySlider.push(slider);

        slider = new SliderFront();
        slider.titulo = '<p class="big-title">La solución que tu empresa necesita</p>';
        slider.subTitulo = 'Dejanos ser tu aliado estrategico para culminar tus proyectos con el 100% de satisfactión.';
        slider.textoBoton = 'Comenzemos';
        slider.rutaBoton = 'Comenzemos';
        slider.iconoBoton = 'icon-arrow-right';
        slider.urlImagen = 'assets/img/slider/slide3.jpg';
        this.arraySlider.push(slider);
    }

    accionBoton(ruta: string) {
        alert(ruta);
    }
}
