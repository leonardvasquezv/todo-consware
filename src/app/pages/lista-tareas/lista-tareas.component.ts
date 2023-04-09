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

  tareas: Tarea[] = [];

  constructor( private store: Store<AppState> ) {}

  ngOnInit(): void {
    this.store.select('tareas')
      .subscribe((tareas) => this.tareas = tareas)
  }

}
