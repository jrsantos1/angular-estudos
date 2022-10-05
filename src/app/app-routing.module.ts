import { DetalhesComponent } from './view/detalhes/detalhes.component';
import { FundosComponent } from './view/fundos/fundos.component';
import { SobreComponent } from './view/sobre/sobre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { CriarFundoComponent } from './components/fundos/criar-fundo/criar-fundo.component';



const routes: Routes = [

  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  },
  {
    path: "fundos",
    component: FundosComponent
  },
  {
    path: "fundos/criar",
    component: CriarFundoComponent
  },
  {
    path: "detalhes/:sac",
    component: DetalhesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
