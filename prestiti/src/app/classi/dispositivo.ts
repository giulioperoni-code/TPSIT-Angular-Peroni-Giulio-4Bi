export class Dispositivo{

  marca: string;
  modello: string;
  anno: number;
  stato: 'disponibile'|'in prestito'|'manutenzione'

  constructor(marca: string, modello: string, anno: number, stato: 'disponibile'|'in prestito'|'manutenzione'){
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.stato = stato;
  }

  public toString(): string{
    return  this.marca + ' ' + this.modello + ' ' + this.anno + ' ' + this.stato;
  }
}
