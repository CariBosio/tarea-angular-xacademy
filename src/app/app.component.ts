import { Component } from '@angular/core';

type Item = {
  producto: string;
  costo: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarea-angular';
  items: Item[] = [
    { producto: 'Limón', costo: '$ 1200' },
    { producto: 'Tomate', costo: '$ 900' },
    { producto: 'Zanahoria', costo: '$ 500' },
    { producto: 'Cebolla', costo: '$ 300' },
    { producto: 'Palta', costo: '$ 4000' },
    { producto: 'Zapallo', costo: '$ 1000' },
    { producto: 'Papa', costo: '$ 380' },
    { producto: 'Lechuga', costo: '$ 400' }
  ];

  mostrarLista: boolean = true;

  toggleLista(): void {
    this.mostrarLista = !this.mostrarLista;
  }
}

