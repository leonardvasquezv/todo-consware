import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { AgregarTareaComponent } from './pages/agregar-tarea/agregar-tarea.component';

const routes: Routes = [
  {
    path: 'lista',
    component: ListaTareasComponent
  },
  {
    path: 'agregar',
    component: AgregarTareaComponent
  },
  {
    path: '**',
    redirectTo: 'lista'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
