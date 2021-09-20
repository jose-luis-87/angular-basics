import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Iroman', 'Hulk', 'Thor', 'Capitán América']
  heroe: string = ''

  borrarHeroe(){
    this.heroe = this.heroes.shift() || ""
  }

}
