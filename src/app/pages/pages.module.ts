import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaTareasComponent,
    AgregarTareaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ListaTareasComponent,
    AgregarTareaComponent
  ]
})
export class PagesModule { }
