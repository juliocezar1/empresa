import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  
  //objeto do tipo cliente

  cliente = new Cliente();

  //variavel para visibilidade dos botões
  btnCadastro:boolean = true;

  //variavel para visibilidade da tabela

  tabela:boolean = true;

  //JSON de clientes
  clientes:Cliente[] = [];

//costrutor
constructor(private servico:ClienteService){}

  //metodo de seleção
  selecionar():void{
this.servico.selecionar()
.subscribe(retorno => this.clientes = retorno);
  }


  //metodo de cadastro
cadastrar():void{
  this.servico.cadastrar(this.cliente)
  .subscribe(retorno => {
    
    this.clientes.push(retorno);
    this.cliente = new Cliente();
  });

}
 //metodo de seleciona  um unico cliente

 selecionarCliente(posicao:number):void{
this.cliente = this.clientes[posicao];
this.btnCadastro = false;
 }

 //metodo para edita cliente
 editar():void{
  this.servico.editar(this.cliente)
  .subscribe(retorno => {
    let posicao = this.clientes.findIndex(obj => {
      return obj.id == retorno.id;
    });
    this.clientes[posicao] = retorno;
    this.cliente = new Cliente();
  });
 }

 //metodo para remove clientes

 remover():void{
  this.servico.remover(this.cliente.id)
  .subscribe(retorno =>{
    let posicao = this.clientes.findIndex(obj =>{
      return obj.id == this.cliente.id;
    });

    this.clientes.splice(posicao, 1);
    this.cliente = new Cliente();
  })
 }

//metodo para cancelar
cancelar():void{
  this.cliente = new Cliente();
  this.btnCadastro = true;
}




  ngOnInit(){
    this.selecionar();
  }

}
