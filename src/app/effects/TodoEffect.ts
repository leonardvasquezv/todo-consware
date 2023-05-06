import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, debounceTime } from 'rxjs/operators';
import * as actions from '../tareas.actions'
import { TareasService } from '../services/tareas.service';

@Injectable()
export class ToDoEffects {
  miEfecto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.crear),
      switchMap((accion) =>
        this.tareasService.agregarTarea(accion).pipe(
          map((respuesta) => actions.crearConId({...accion, idTarea: respuesta.data.IdTarea}))
        )
      )
    )
  );

  constructor(private actions$: Actions, private tareasService: TareasService) {}
}



