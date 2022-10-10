import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

// importando material design
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'

// import http module
import {HttpClientModule} from '@angular/common/http'


// import HighCharts


// import servides

import { FundoService } from './components/fundos/fundo.service';

import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import { CardComponent } from './view/card/card.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { FundosComponent } from './view/fundos/fundos.component';
import { CriarFundoComponent } from './components/fundos/criar-fundo/criar-fundo.component';
import { LerFundoComponent } from './components/fundos/ler-fundo/ler-fundo.component';
import { DetalhesComponent } from './view/detalhes/detalhes.component';
import {HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CardComponent,
    SobreComponent,
    FundosComponent,
    CriarFundoComponent,
    LerFundoComponent,
    DetalhesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    HighchartsChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
