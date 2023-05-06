import { createReducer, on } from '@ngrx/store';
import { Tarea } from './models/tareas.model';
import { crear, crearConId, crearMuchos } from './tareas.actions';


export const estadoInicial: Tarea[] = [
];

const _tareasReducer = createReducer(estadoInicial,
  on( crearConId, (state, {idTarea, nombre, accion, responsable, duracion, estado}) => [...state, new Tarea(idTarea, nombre, accion, responsable, duracion, estado)  ] ),
  on( crearMuchos, (state, {idTarea, nombre, accion, responsable, duracion, estado}) => [...state, new Tarea(idTarea, nombre, accion, responsable, duracion, estado)  ] ),
  // on( borrar, ( state, { id } ) =>  state.filter( tarea => tarea.id !== id ) ),

  // on( editar, (state, { id, nombre, accion, responsable, duracion, estado }) => {
    
  //   return state.map( tarea => {

  //     if ( tarea.id === id  ) {
  //       return {
  //         ...tarea,
  //         nombre,
  //         accion,
  //         responsable,
  //         duracion,
  //         estado
  //       }
  //     } else {
  //       return tarea;
  //     }

  //   });
  // }),

  // on( editarEstado, (state, { id, estado }) => {
    
  //   return state.map( tarea => {

  //     if ( tarea.id === id  ) {
  //       return {
  //         ...tarea,
  //         estado
  //       }
  //     } else {
  //       return tarea;
  //     }

  //   });
  // }),

);

export function tareasReducer(state: any, action: any) {
  return _tareasReducer(state, action);
}