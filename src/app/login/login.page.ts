import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  entradaUsuario: {
    usuario: string,
    contra: string
  };


  constructor() { 
    this.entradaUsuario = {
      usuario: '',
      contra: ''
    }
  }

  ngOnInit() {
  }

  guardarItem(){
    //localStorage.setItem('usuario', JSON.stringify(this.entradaUsuario));
    localStorage.setItem('miau', JSON.stringify(this.entradaUsuario.usuario));
  }

}
