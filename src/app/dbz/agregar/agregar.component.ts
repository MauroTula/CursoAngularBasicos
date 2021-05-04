import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

 @Input() nuevo: Personaje = {
    nombre: '',
    poder: null
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    /* if(this.nuevo.nombre.trim().length === 0 ){
      return;
    } */
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
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
