import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  title = 'SolmanIngWebSite-V8';

  ngOnInit(): void {
    // const array = [1, 4, 3, 6, 7, 6, 1, 2, 3, 8, 6];
    // var min = Math.min.apply(null, array);
    // var max = Math.max.apply(null, array);
    // // Declaramos un array para guardar temporalmente los objetos con su cantidad de repetidos
    // const arrayObj: any[] = [];

    // // Recorremos el array para  evaluar cada objeto
    // for (let index = 1; index <= max; index++) {
    //   // Filtramos para conocer la cantidad de veces que se repite
    //   const filterArray = array.filter(item2 => item2 === index);
    //   // Evaluamos si el objeto existe en el array
    //   const indexExiste = arrayObj.findIndex(obj => obj.valor === index);
    //   // Si no existe lo agregamos en el array final de presentacion.
    //   if (indexExiste === -1) {
    //     let obj = {
    //       valor: index,
    //       cantidad: filterArray.length
    //     };
    //     arrayObj.push(obj);
    //   }
    // }
    // // Ordenamos el array  por el que tenga mayor cantidad de repetidos.
    // // Realizamos una asignacion clonando el objeto para que no sea solo por referencia.
    // const arrayClone = Object.assign([], arrayObj.sort((a, b) => a.valor - b.valor));

    // // Recorremos el array final para imprimir en consola segun lo solicitado.
    // arrayClone.forEach(item => {
    //   console.log(item.valor + ': ' + ''.padStart(item.cantidad, '*'));
    // });

    // var n = 6;
    // if (n === 0) {
    //   console.log('ERROR');
    // } else {
    //   var caracter = 'X';
    //   var separador = '_';
    //   var linea = '';
    //   var posCaracterA = 0;
    //   var posCaracterB = 0;
    //   posCaracterB = n;
    //   for (let i = 1; i <= n; i++) {
    //     posCaracterA = i;
    //     linea = '';
    //     for (let j = 1; j <= n; j++) {
    //       linea += (j === posCaracterA || j === posCaracterB) ? caracter : separador;
    //     }
    //     posCaracterB = n - i;
    //     console.log(linea);
    //   }
    // }

  }
}
