import {Component} from '@angular/core'

@Component({
    selector: 'app-acumulador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>{{base}}</h3>
        <button (click)="acumular(-base)">-{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(base)">+{{base}}</button>
    `
})

export class Acumulador {
    titulo: string = 'Contador app';
    numero: number = 10
    base: number = 5

    acumular(valor: number){
        this.numero += valor
    }
}