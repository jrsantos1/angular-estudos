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
    mesa: 'hot',
    var: 12.33,
    stress: 14.2234,
    alertaStress: 0,
    alertaVar: 0

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
