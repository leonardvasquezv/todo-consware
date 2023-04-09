import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../tareas.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss']
})
export class AgregarTareaComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required] ],
    accion: [ '', [Validators.required] ],
    responsable: [ '', [Validators.required] ],
    duracion: [ '', [Validators.required] ],
    estado: [ 'Seleccione', [Validators.required] ],
  });

  constructor( private fb: FormBuilder, private store: Store<AppState>, private router:Router){}

  agregar() {
    this.store.dispatch( actions.crear(this.miFormulario.value) )
    this.miFormulario.reset();
    this.router.navigate(['/lista'])
  }

}
