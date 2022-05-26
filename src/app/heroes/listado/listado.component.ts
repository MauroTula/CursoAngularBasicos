import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Iron Man',
    'Hulk',
    'Thor',
    'Capitán América',
  ];
  heroeListaBorrado: string[] = [];
  disabled = false;
  /* heroeListaBorrado: string = ''; */
  /* O se puede hacer de esta forma pero solo aparecen de a uno a la vez */

  borrarHeroe() {
    const heroeBorrado = this.heroes.shift();
    this.heroeListaBorrado.push(heroeBorrado);
    /* this.heroeListaBorrado.push() || ''; */
    console.log(this.heroes);
    if (this.heroes.length === 0) {
      this.disabled = true;
    }
  }
}
