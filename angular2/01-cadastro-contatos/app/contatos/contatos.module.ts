import {NgModule} from '@angular/core'
import {ConatosListaComponent} from './contatos-lista.component'
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ConatosListaComponent
    ],
    exports: [
        ConatosListaComponent
    ]
})
export class ContatosModule{}