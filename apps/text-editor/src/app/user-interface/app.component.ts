import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@text-editor/api-interfaces';

@Component({
  selector: 'text-editor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  textoSelecionado: string;



  pegarTextoSelecionado() {
    const texto = window.getSelection();
    this.textoSelecionado = texto.toString();
  }

  setarNegrito(){


    const elemento = document.querySelector('.flex-item h1');


    //console.log(this.textoSelecionado);
  }


}
