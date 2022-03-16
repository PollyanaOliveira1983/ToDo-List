import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todoList: string[] = [];
  doneList: string[] = [];
  itemToAdd!: string;

  constructor() { }

  addToList() {

    this.salvarNoLocalStorage(this.itemToAdd)
    this.todoList.push(this.itemToAdd)

  }

  doItem(index: number) {

    this.doneList.push(this.todoList[index])

  }

  excluiTarefa(index: number){

    let valor = this.todoList[index]
   // alert(this.dadoLocalStorage?.indexOf(valor))
    this.removeItem(valor)
    this.todoList.splice(index, 1)

  }

  excluirAsTarefas(){

    let tipo = this.doneList.length;
    if (tipo > 0 ){
    let resultado = confirm("Deseja excluir os itens selecionados ? " + "Itens a serem excluídos: " + tipo);
    if (resultado == true) {
       while(this.doneList.length) {
           this.doneList.pop()
       }
     }
   }
  }

  dadoLocalStorage: string[] | null = []

    ngOnInit(): void{
      this.recupararDadosDoLocalStorage()
    }

    salvarNoLocalStorage(valor: string){
      this.dadoLocalStorage?.push(valor)
      let arrStr = JSON.stringify(this.dadoLocalStorage)
      localStorage.setItem('dado', arrStr)
      this.recupararDadosDoLocalStorage()
    }

    recupararDadosDoLocalStorage(): void{
      let storage = localStorage.getItem('dado')
      let arr = JSON.parse(storage || '[]')
      this.dadoLocalStorage = arr

    }


/*****************Função para remover******************/
 removeItem(id: string) {
  let storage = localStorage.getItem('dado')
  let arr = JSON.parse(storage || '[]')
  for (var i = 0; i < arr.length; i++) { //loop para buscar o id
    if (arr[i] === id) { //verifica id
      arr.splice(i, 1); //remove item
      break; //finaliza o loop
    }
  }
  localStorage.setItem("dado", JSON.stringify(arr)); //reescreve a localStorage
}

}
