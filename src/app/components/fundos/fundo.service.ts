import { Fundos } from './fundos.module';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Directive, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundoService {

  constructor(private router: Router, private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:5000/api-jhon'

  testeExibiMensagem(){
    console.log('Deu certo')
  }

  cancelarSalvar(){
    this.router.navigate(["/fundos/"])
  }

  obterDadosFundos(): Observable<Fundos[]>{
    return this.http.get<Fundos[]>(this.baseUrl)
  }

  criarFundo(fundo: Fundos): Observable<Fundos>{
    //console.log(this.http.post<Fundos>(this.baseUrl, fundo))
    return this.http.post<Fundos>(this.baseUrl,fundo)
  }

}
