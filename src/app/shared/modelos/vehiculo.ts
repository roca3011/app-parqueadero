import { TipoVehiculo } from './tipoVehiculo';
export class Vehiculo {

  constructor(
    public idVehiculo: number,
    public tipoVehiculo: TipoVehiculo,
    public cilindraje: number,
    public placa: string,
    public fechaCreacion: Date
  ) { }

}
