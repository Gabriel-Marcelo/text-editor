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
  elementoSelecionado: string;


  pegarTextoSelecionado(event) {
    const texto = window.getSelection();
    this.textoSelecionado = texto.toString();
    this.elementoSelecionado = event.path[0];
    console.log(this.elementoSelecionado);
    console.log(this.textoSelecionado)

  }

  setarNegrito(){

    // const elemento = document.querySelector('.flex-item h1').style.fontWeight = 'bold';
    // console.log(document.querySelector('.flex-item h1'));

    // console.log(this.elementoSelecionado.valueOf().innerHTML);
    // console.log(this.textoSelecionado);
    if(this.elementoSelecionado.style.fontWeight === 'bold') {
       //this.elementoSelecionado.style.fontWeight = 300;
      this.elementoSelecionado.style.fontWeight = 300;
    }
    else {
      this.elementoSelecionado.style.fontWeight = 'bold';
    }
    //console.log(this.elementoSelecionado.innerHTML.charAt(1));
   // console.log(this.elementoSelecionado.innerHTML.charAt(2).fontcolor("blue"));

    //this.elementoSelecionado.style.fontWeight = 'bold';
  }

  setarItalico() {

  }

}
