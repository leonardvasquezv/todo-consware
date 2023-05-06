import { createAction, props } from '@ngrx/store';


export const limpiarTodos = createAction('[TODO] Limpiar TODOS');

export const crearMuchos = createAction(
    '[TODO] Crea tarea',
    props<{ idTarea: number, nombre: string, accion: string, responsable: string, duracion: number, estado: number }>()
);

export const crear = createAction(
    '[TODO] Crea tarea',
    props<{ nombre: string, accion: string, responsable: string, duracion: number, estado: number }>()
);

export const crearConId = createAction(
    '[TODO] Crea tarea con Id',
    props<{ idTarea: number, nombre: string, accion: string, responsable: string, duracion: number, estado: number }>()
);

// export const editar = createAction(
//     '[TODO] Editar Tarea',
//     props<{ id: number, nombre: string, accion: string, responsable: string, duracion: number, estado: string }>()
// );

// export const editarEstado = createAction(
//     '[TODO] Editar Estado',
//     props<{ id: number, estado: string }>()
// );

// export const borrar = createAction(
//     '[TODO] Borrar Tarea',
//     props<{ id: number }>()
// );
