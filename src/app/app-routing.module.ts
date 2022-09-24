import { SobreComponent } from './view/sobre/sobre.component';
import { NavComponent } from './components/template/nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
