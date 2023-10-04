export class Livro {

    constructor(private _isbn: string, private _titulo: string,
                private _autor: string) {
    }
  
    get isbn(): string {
      return this._isbn;
    }
  
    set isbn(value: string) {
      this._isbn = value;
    }
  
    get titulo(): string {
      return this._titulo;
    }
  
    set titulo(value: string) {
      this._titulo = value;
    }
  
    get autor(): string {
      return this._autor;
    }
  
    set autor(value: string) {
      this._autor = value;
    }
  }