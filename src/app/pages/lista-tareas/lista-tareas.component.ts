import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Tarea } from 'src/app/models/tareas.model';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.scss']
})
export class ListaTareasComponent implements OnInit {

  tareas: any[] = [];

  constructor( private store: Store<AppState> ) {}

  ngOnInit(): void {
    this.store.select('tareas')
      .subscribe((tareas) => {
        console.log(tareas)
        tareas.forEach(tarea => {
          this.tareas.push({
            idTarea: tarea.idTarea,
            nombre: tarea.nombre,
            accion: tarea.accion,
            responsable: tarea.responsable,
            duracion: tarea.duracion,
            estado: tarea.estado === 1 ? 'Inicio' : tarea.estado === 2 ? 'En proceso' : 'Finalizada'
          })
        });
      })
  }

}
