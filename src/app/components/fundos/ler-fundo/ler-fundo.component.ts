import { Fundos } from './../fundos.module';
import { FundoService } from './../fundo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ler-fundo',
  templateUrl: './ler-fundo.component.html',
  styleUrls: ['./ler-fundo.component.scss']
})
export class LerFundoComponent implements OnInit {

  fundos: Fundos[] | undefined

  constructor(private fundosService: FundoService) { }

  ngOnInit(): void {
    this.fundosService.obterDadosFundos().subscribe(fundos => {
      this.fundos = fundos
      console.log(this.fundos)
    })
  }

}
