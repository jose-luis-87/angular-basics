import { Component } from "@angular/core";

@Component({
    selector: "heroe",
    templateUrl: "heroe.componet.html"
})
export class Heroe {
    nombre: string = 'ironman'
    edad: number = 45

    get nombreUpperCase(): string{
        return this.nombre.toLocaleUpperCase()
    }

    obtenerNombre(){
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre():void{
        this.nombre = 'spiderman'
    }
    
    cambiarEdad():void{
        this.edad = 85
    }
}