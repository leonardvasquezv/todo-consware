import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../tareas.actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TareasService } from 'src/app/services/tareas.service';
import { Estados } from 'src/app/enums/Estados';

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
    duracion: [ null, [Validators.required] ],
    estado: [ 'Seleccione', [Validators.required] ],
  });

  constructor( private fb: FormBuilder, private tareasService: TareasService, private store: Store<AppState>, private router:Router, private toastr: ToastrService){
  }
  
  
  agregar() {
    if (!this.miFormulario.valid) {
      this.toastr.show('Por favor, ingresa todos los campos.', '¡Error!', {toastClass: 'toast-custom-error'});
      return
    }

    // this.tareasService.agregarTarea({...this.miFormulario.value, estado: Estados[this.miFormulario.controls["estado"].value]}).subscribe(id => {
    //   console.log(id)
    // })

    this.store.dispatch( actions.crear({...this.miFormulario.value, estado: Estados[this.miFormulario.controls["estado"].value]}) )
    // this.miFormulario.reset();
    // this.toastr.success('Se agregó la nueva tarea.', '¡Genial!', {toastClass: 'toast-custom'});
    // this.router.navigate(['/lista'])
  }

}
