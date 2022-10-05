import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  valorUrl: any;

  constructor(private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.valorUrl = params['sac']);
  }

}
