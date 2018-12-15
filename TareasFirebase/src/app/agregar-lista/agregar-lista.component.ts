import { ConexionService } from './../servicios/conexion.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-agregar-lista',
  templateUrl: './agregar-lista.component.html',
  styleUrls: ['./agregar-lista.component.css']
})
export class AgregarListaComponent implements OnInit {
  objeto: any = {
    name: ''
  };
  constructor(private servicio: ConexionService) { }

  ngOnInit() {
  }

  agregarObjeto() {
    this.servicio.agregarItem(this.objeto);
    this.objeto.name = '';

  }

}
