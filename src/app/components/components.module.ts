import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListaComponent } from './item-lista/item-lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ItemListaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    ItemListaComponent
  ]
})
export class ComponentsModule { }
