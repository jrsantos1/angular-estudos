import { Component, OnInit } from '@angular/core';

// Importando router para redirecionar pagina ao acionar evento de click
import { Router } from '@angular/router';

@Component({
  selector: 'app-fundos',
  templateUrl: './fundos.component.html',
  styleUrls: ['./fundos.component.scss']
})
export class FundosComponent implements OnInit {

  // Iniciando construtor com o router
  // Deixa-lo como private para se tornar visível

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // retorno evento de click
  criarNovoProduto(){
    this.router.navigate(['/fundos/criar'])
  }

}
