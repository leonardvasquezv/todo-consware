import { createAction, props } from '@ngrx/store';


export const limpiarTodos = createAction('[TODO] Limpiar TODOS');

export const crear = createAction(
    '[TODO] Crea Tarea',
    props<{ nombre: string, accion: string, responsable: string, duracion: string, estado: string }>()
);

export const editar = createAction(
    '[TODO] Editar Tarea',
    props<{ id: number, nombre: string, accion: string, responsable: string, duracion: string, estado: string }>()
);

export const editarEstado = createAction(
    '[TODO] Editar Estado',
    props<{ id: number, estado: string }>()
);

export const borrar = createAction(
    '[TODO] Borrar Tarea',
    props<{ id: number }>()
);
