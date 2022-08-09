import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface IValores {
  version: string;
  autor: string;
  fecha: string;
  uf: IValor;
  ivp: IValor;
  dolar: IValor;
  dolar_intercambio: IValor;
  euro: IValor;
  ipc: IValor;
  utm: IValor;
  imacec: IValor;
  tpm: IValor;
  libra_cobre: IValor;
  tasa_desempleo: IValor;
  bitcoin: IValor;
}

interface IValor {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
}

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css'],
})
export class ValoresComponent implements OnInit {
  cargando = true;
  valores?: IValores;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.treaerValores();
  }

  private treaerValores() {
    this.http.get<IValores>('https://mindicador.cl/api').subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.valores = respuesta;
        this.cargando = false;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('operación completada');
      },
    });
  }
}
