import { Fundos } from './../fundos.module';
import { Router } from '@angular/router';
import { FundoService } from './../fundo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-criar-fundo',
  templateUrl: './criar-fundo.component.html',
  styleUrls: ['./criar-fundo.component.scss']
})
export class CriarFundoComponent implements OnInit {

  fundoTeste: Fundos = {
    nome: 'Bias 3 Multimercado',
    segmento: 'Renda Fixa',
    controle: 'VaR'
  }

  constructor(private fundoService: FundoService, private router: Router) { }

  //this.fundoService.testeExibiMensagem();

  ngOnInit(): void {
    this.fundoService.testeExibiMensagem();
  }

  cancel(){
   this.fundoService.cancelarSalvar();
  }

  obterDados(){
    this.fundoService.obterDadosFundos().subscribe(() =>
      console.log('Operação realizada com sucesso')
    )
  }

  criarFundo(){
    this.fundoService.criarFundo(this.fundoTeste).subscribe(() =>
    console.log('Operação realizada com sucesso')
    )
  }


}
