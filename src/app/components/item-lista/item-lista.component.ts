import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tarea } from 'src/app/models/tareas.model';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../tareas.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.scss']
})
export class ItemListaComponent {

  enEdicion: boolean = false;

  @Input() tarea!: Tarea;
  
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required] ],
    accion: [ '', [Validators.required] ],
    responsable: [ '', [Validators.required] ],
    duracion: [ '', [Validators.required] ],
    estado: [ '', [Validators.required] ],
  });

  constructor( private store:Store<AppState>, private fb: FormBuilder ) {

  }

  modoEdicion() {
    this.enEdicion = true;
    this.miFormulario.setValue({
      nombre: this.tarea.nombre,
      accion: this.tarea.accion,
      responsable: this.tarea.responsable,
      duracion: this.tarea.duracion,
      estado: this.tarea.estado,
    })
  }

  eliminar(id: number) {
    this.store.dispatch( actions.borrar({id: id}) );
  }

  cambiarEstado(value: Tarea) {
    if (value.estado === 'Inicio') {
      this.store.dispatch( actions.editarEstado({id: this.tarea.id, estado: 'En proceso'}) );
    }
    if (value.estado === 'En proceso') {
      this.store.dispatch( actions.editarEstado({id: this.tarea.id, estado: 'Terminada'}) );
    }
    if (value.estado === 'Terminada') {
      this.store.dispatch( actions.editarEstado({id: this.tarea.id, estado: 'Inicio'}) );
    }
  }

  editar(tarea: Tarea) {
    this.store.dispatch( actions.editar({id: this.tarea.id, ...this.miFormulario.value}) );
  }

  cancelar() {
    this.enEdicion = false;
    this.miFormulario.reset()
  }


}
