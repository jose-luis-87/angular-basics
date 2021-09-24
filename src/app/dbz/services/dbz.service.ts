import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegueta',
          poder: 9000
        }
    ]
    
    get personajes(): Personaje[] {
        return [ ...this._personajes ] 
    }
    
    constructor(){
        console.log('servicio arriba');
    }

    agregarPersonaje( personaje: Personaje ){
        this._personajes.push(personaje)
    }

}