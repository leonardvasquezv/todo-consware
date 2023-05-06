export interface Response<T>{
  data: T;
  isSuccess: boolean;
  message: string;
}

export interface ITarea {
  idTarea: number;
  nombre: string;
  accion: string;
  responsable: string;
  duracion: number;
  estado: number;
}