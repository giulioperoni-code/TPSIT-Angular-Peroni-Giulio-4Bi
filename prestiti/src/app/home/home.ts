import { Component } from '@angular/core';
import { IDispositivo } from '../interfaces/idispositivo';
import { Dispositivo } from '../classi/dispositivo';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private classe: string = '4B Informatica';
  private numero_ore: number = 67;

  private mioDispositivo: IDispositivo = {
    id: 1,
    modello: 'pc',
    anno: 2026,
    inventario: 'num209',
    marca: 'hp',
    stato:'manutenzione',
    tipo: 'notebook'
  }

  private dispositivo2: Dispositivo = new Dispositivo('hp', 'pc', 2026, 'manutenzione');
}
