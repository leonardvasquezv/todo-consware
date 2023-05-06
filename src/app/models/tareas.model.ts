export class Tarea {

  public idTarea: number;
  public nombre: string;
  public accion: string;
  public responsable: string;
  public duracion: number;
  public estado: number;

  constructor( id: number, nombre: string, accion: string, responsable: string, duracion: number, estado: number ) {

    this.idTarea = id;
    this.nombre = nombre;
    this.accion = accion;
    this.responsable = responsable;
    this.duracion = duracion;
    this.estado = estado;
  }

}