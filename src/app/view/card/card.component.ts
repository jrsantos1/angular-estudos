import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() {}

  nome = ['Jhonatan', 'Teste', 'Teste2', 'Teste3'];

  nome2: string = "jhonatan";

  exibirMensagem(): void{
    console.log("Olá mundo")
  }

  ngOnInit(): void {
  }

}
