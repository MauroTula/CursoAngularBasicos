import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {


  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: null
  }

  agregar(  ) {
    /* if(this.nuevo.nombre.trim().length === 0 ){
      return;
    } */
    console.log(this.nuevo);

    // Agrega el personaje a la lista
    this.personajes.push(this.nuevo);
    // Limpia el formulario al agregar un personaje
    this.nuevo = {
      nombre: '',
      poder: null
    }
    
  }
  
  /* cambiarNombre( event: any) {
    console.log(event.target.value);

  } */
 
  /* agregar( event: any ) {
    event.preventDefault();
    console.log('Hey!!');

  } */
}
