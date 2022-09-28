import { Fundos } from './../fundos.module';
import { FundoService } from './../fundo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ler-fundo',
  templateUrl: './ler-fundo.component.html',
  styleUrls: ['./ler-fundo.component.scss']
})
export class LerFundoComponent implements OnInit {


  //fundos: Fundos[] | undefined

  alertColor(value: number) {
    if (value > 3){
      return 'red'
    }else if (value > 2){
      return 'green'
    }else{
      return 'yellow'
    }

  }

  fundos: Fundos[] | undefined

  constructor(private fundosService: FundoService) { }

  ngOnInit(): void {
    // this.fundosService.obterDadosFundos().subscribe(fundos => {
    //   this.fundos = fundos
    //   console.log(this.fundos)
    // })

     this.fundosService.getAllMultimesas().subscribe(fundos => {
       this.fundos = fundos
     })
  }

}
