import {Component} from '@angular/core';
import {CONTATOS} from './contatos-mock';
import {contato} from './contato.model';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ConatosListaComponent{
    contatos: contato[] = CONTATOS;
}