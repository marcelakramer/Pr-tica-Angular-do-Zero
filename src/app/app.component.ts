import { Component } from '@angular/core';
import { Livro } from './shared/models/livro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pweb-livro';
  livros: Livro[] = [];
  livroTratamento: Livro;
  mensagemErro = '';
  livrosPesquisa: Livro[] = [];

  constructor() {
    this.livroTratamento = new Livro('', '', '');
  }

  cadastrarLivro(): void {
    if (!this.ehIsbnCadastrado(this.livroTratamento.isbn)) {
      this.livros.push(this.livroTratamento);
      this.livroTratamento = new Livro('', '', '');
      this.mensagemErro = '';
    } else {
      this.mensagemErro = `ISBN ${this.livroTratamento.isbn} já cadastrado.`;
    }
  }

  private ehIsbnCadastrado(isbn: string): boolean {
    return this.livros.some(
      (livro) => livro.isbn === isbn
    );
  }

  removerLivro(livroARemover: Livro): void {
    const indexARemover = this.livros.findIndex(
      (livro) => livro.isbn === livroARemover.isbn
    );

    if (indexARemover >= 0) {
      this.livros.splice(indexARemover, 1);
    }
  }

  pesquisarLivro(pedacoIsbn: string): void {
    this.livrosPesquisa = [];
    if (pedacoIsbn.length === 0) {
      this.livrosPesquisa = [];
    } else {
      this.livros.forEach(livro => {
        if (livro.isbn.startsWith(pedacoIsbn)) {
          this.livrosPesquisa.push(livro);
        }
      });
    }
  }

  selecionarLivro(livro: Livro): void {
    this.livroTratamento = livro;
  }

  editarLivro(): void {
    const livroExistente = this.livros.find((livro) => livro.isbn === this.livroTratamento.isbn);
  
    if (livroExistente) {
      Object.assign(livroExistente, this.livroTratamento);
      this.livroTratamento = new Livro('', '', '');
      this.mensagemErro = '';
    } else {
      this.mensagemErro = 'ISBN não cadastrado.';
    }
  }
}
