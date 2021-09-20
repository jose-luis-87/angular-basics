import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Acumulador } from './acumulador/acumulador.component';

@NgModule({
    declarations: [
        Acumulador
    ],
    exports: [
        Acumulador
    ],
    imports:[
        CommonModule
    ]
})
export class ContadorModule {}