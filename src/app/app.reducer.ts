import { ActionReducerMap } from '@ngrx/store';

import { Tarea } from './models/tareas.model';

import { tareasReducer } from './tareas.reducer';


export interface AppState {
    tareas: Tarea[],
}



export const appReducers: ActionReducerMap<AppState> = {
    tareas: tareasReducer,
}