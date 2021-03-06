import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['heroe.component.css']
})
export class HeroeComponent {
  public nombre: string = 'Iron Man';
  public edad: number = 45;

  get NombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `El heroe ${this.nombre}, tiene ${this.edad} años`;
  }

  cambiarHeroe(): void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void{
    this.edad = 30;
  }
}