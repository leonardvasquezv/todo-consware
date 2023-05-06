import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ITarea, Response } from '../interfaces/ITarea';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  getTareas(): Observable<Response<ITarea[]>>{
    return this.http.get<Response<ITarea[]>>(`${this.baseUrl}/tareas/obtenertodos`)
  }

  agregarTarea(tarea: any): Observable<Response<any>>{
    return this.http.post<Response<any>>(`${this.baseUrl}/tareas/insertar`, tarea)
  }

}
