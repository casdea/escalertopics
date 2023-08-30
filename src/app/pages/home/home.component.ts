import { Component, OnInit } from '@angular/core';
import { serverData } from 'src/app/data/serverData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dados = serverData;

  pathImagens : String = '../../../assets/';

  constructor() { }

  ngOnInit(): void {
  }

}
