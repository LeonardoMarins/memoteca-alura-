import {Component, Input, OnInit} from '@angular/core';
import {Pensamento} from "../pensamento";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = { // @input vai receber os dados do componente pai que no caso e o listar-pensamento
    conteudo: "I love Angular",
    autoria: 'Nay',
    modelo:  'modelo3',
    id: ''
  }

  larguraPensamento():string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
