import {NgModule} from '@angular/core'
import {ConatosListaComponent} from './contatos-lista.component'

@NgModule({
    declarations: [
        ConatosListaComponent
    ],
    exports: [
        ConatosListaComponent
    ]
})
export class ContatosModule{}