import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';

import {ContatoDetalheComponemt} from './contato-detalhe.componemt';
import {ConatosListaComponent} from './contatos-lista.component';
import {ContatoRoutingModule} from './contato-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule
    ],
    declarations: [
        ContatoDetalheComponemt,
        ConatosListaComponent
    ],
    exports: [
        ConatosListaComponent
    ]
})
export class ContatosModule{}