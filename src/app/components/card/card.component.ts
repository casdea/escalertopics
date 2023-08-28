import { AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input() titulo1Linha1 : String = '';
  @Input() titulo2Linha2 : String = '';
  @Input() titulo1Linha3 : String = '';
  @Input() imagem1Linha1 : String = '';
  @Input() imagem1Linha3 : String = '';
  @Input() imagem1Bloco2 : String = '';
  @Input() corFundo : String = '';
  //#ffe6e9

  constructor() {
   }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
