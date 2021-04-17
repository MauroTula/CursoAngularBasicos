import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{titulo}}</h1>

    <div>
      <button (click)="restar()"> - </button>
      <span>{{numero}}</span>
      <button (click)="sumar()"> + </button>

    </div>

    <br />

    <div>
      <button (click)="sumaResta(-1)"> - </button>
      <span>{{numero2}}</span>
      <button (click)="sumaResta(+1)"> + </button>

    </div>
  `
})
export class ContadorComponent {
  public titulo: string = 'Contador App';

  numero: number = 0;
  
  sumar(){
    //this.numero += 1
    this.numero = this.numero + 1;
  }
  restar(){
    //this.numero -= 1
    this.numero = this.numero - 1;
  }
  
  // otra forma de hacer lo mismo ------------------------------------------------

  numero2: number = 0
  
  sumaResta(valor: number) {
    this.numero2 += valor;
  }
}