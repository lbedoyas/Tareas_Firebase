import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ConexionService } from '../servicios/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items: any;

  constructor(private conexion: ConexionService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
  }

  ngOnInit() {
  }

  eliminar(item) {
    this.conexion.eliminarItem(item);
  }

}
