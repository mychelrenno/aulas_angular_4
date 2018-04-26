import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ConatosListaComponent} from './contatos-lista.component';
import {ContatoDetalheComponemt} from './contato-detalhe.componemt';

const contatoRoutes: Routes = [
    {
        path: 'contato',
        component: ConatosListaComponent
    },
    {
        path: 'contato/save',
        component: ContatoDetalheComponemt
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(contatoRoutes)
    ]
})
export class ContatoRoutingModule {}