import { Fundos } from './../fundos.module';
import { FundoService } from './../fundo.service';
import { Component, OnInit } from '@angular/core';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

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

  filtro(){
    const INPUT_BUSCA = document.getElementById('input-busca')
    const TABELA_FUNDOS = document.getElementById('tabela-fundos')

    INPUT_BUSCA?.addEventListener('keyup', () =>{

      let expresao = (INPUT_BUSCA as HTMLInputElement).value;

      let linhas = TABELA_FUNDOS?.getElementsByTagName('tr')

      for(let posicao in linhas){
        if(true === isNaN(Number(posicao))){
          continue
        }

        let conteudo = linhas[Number(posicao)].innerHTML

        if(true === conteudo.includes(expresao)) {
          linhas[Number(posicao)].style.display = '';
        }else{
          linhas[Number(posicao)].style.display = 'none';
        }


      }

      console.log(expresao)

    })

  }



  fundos: Fundos[] | undefined

  constructor(private fundosService: FundoService) { }

  ngOnInit(): void {
    // this.fundosService.obterDadosFundos().subscribe(fundos => {
    //   this.fundos = fundos
    //   console.log(this.fundos)
    // })

    this.filtro()

     this.fundosService.getAllMultimesas().subscribe(fundos => {
       this.fundos = fundos
     })
  }

}
