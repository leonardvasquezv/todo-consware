import { Component, OnInit } from '@angular/core';
import { TareasService } from './services/tareas.service';
import { ITarea, Response } from './interfaces/ITarea';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as actions from './tareas.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tareas';

  constructor(private tareasService: TareasService, private store: Store<AppState>) {
    
  }

  ngOnInit(): void {
    // this.tareasService.getTareas().subscribe((res: Response<ITarea[]>) => {
    //   res.data.forEach(tarea => {
    //     this.store.dispatch( actions.crearMuchos({...tarea}) )
    //   });
    // })
  }
}
