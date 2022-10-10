import { Fundos, Var } from './../fundos.module';
import { FundoService } from './../fundo.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'
import { Options } from 'highcharts'
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

@Component({
  selector: 'app-ler-fundo',
  templateUrl: './ler-fundo.component.html',
  styleUrls: ['./ler-fundo.component.scss']
})
export class LerFundoComponent implements OnInit {

  title = 'myHighchart';

  data = [{
          name: 'Javatpoint.com',
          data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654],
          type: undefined
       },{
          name: 'Tutorialandexample.com',
          data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654],
          type: undefined
       }];

  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
       type: "spline"
    },
    title: {
       text: "Monthly Site Visitor"
    },
    xAxis:{
       categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
       title:{
          text:"Visitors"
       }
    },
    series: [{
        name: 'Javatpoint.com',
        data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654],
        type: 'line'
      },
      {
      name: 'Tutorialandexample.com',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654],
      type: 'line'
      }]
  };

// // Chart

 dataset: string[] = []
 dataset_values: number[] = []

// // grafico

// title = 'Teste'

// data = [{
//   data: this.dataset_values
// }]

// highcharts = Highcharts;

// chartOptions = {
//   chart: {
//     type: "bar"
//   },
//   title: {
//       text: "Monthly Site Visitor"
//   },
//   xAxis:{
//       categories: this.dataset
//   },
//   yAxis: {
//       title:{
//         text:"Visitors"
//       }
//   },
//   series: this.data
//   };


  cotacao: string | undefined;

  fundos: Fundos[] = [];

  vol: Var[] =[];



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

  mostrarFundos(fund: Fundos[]){
    for (const iterator of fund) {
      console.log(iterator.nome)
    }
  }

  constructor(private fundosService: FundoService) { }

  ngOnInit(): void {

    console.log('fucku');


    this.fundosService.pegarCotacaoAtual().subscribe(cotacao => {
      this.cotacao = cotacao;
      console.log(this.cotacao);
    })

    this.filtro()

     this.fundosService.getAllMultimesas().subscribe(fundos => {
       this.fundos = fundos;
       fundos.forEach(fundo => {
         this.dataset.push(fundo.nome)
         this.dataset_values.push(fundo.var)
       })

     })

    //this.fundosService.getVar().subscribe(fundo => { this.vol = fundo });
  }

}
