import { createReducer, on } from '@ngrx/store';
import { Tarea } from './models/tareas.model';
import { borrar, crear, editar, editarEstado } from './tareas.actions';


export const estadoInicial: Tarea[] = [
    new Tarea('Test de Consware', 'Realizar CRUD de tareas usando Redux', 'Leonard', 24, 'En proceso'),
    new Tarea('Nuevo curso', 'Empezar curso de C#', 'Leonard', 22, 'Inicio'),
];

const _tareasReducer = createReducer(estadoInicial,
  on( crear, (state, {nombre, accion, responsable, duracion, estado}) => [...state, new Tarea(nombre, accion, responsable, duracion, estado)  ] ),
  
  on( borrar, ( state, { id } ) =>  state.filter( tarea => tarea.id !== id ) ),

  on( editar, (state, { id, nombre, accion, responsable, duracion, estado }) => {
    
    return state.map( tarea => {

      if ( tarea.id === id  ) {
        return {
          ...tarea,
          nombre,
          accion,
          responsable,
          duracion,
          estado
        }
      } else {
        return tarea;
      }

    });
  }),

  on( editarEstado, (state, { id, estado }) => {
    
    return state.map( tarea => {

      if ( tarea.id === id  ) {
        return {
          ...tarea,
          estado
        }
      } else {
        return tarea;
      }

    });
  }),

);

export function tareasReducer(state: any, action: any) {
  return _tareasReducer(state, action);
}