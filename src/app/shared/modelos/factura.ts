import {Vehiculo} from './Vehiculo';
export interface FacturaInterface{
     idFactura: number,
     fechaIngreso: Date,
     fechaSalida: Date,
     valorTotal: number,
     fechaCreacion: Date,
     vehiculo: Vehiculo,
     estado: boolean
}
export class Factura implements FacturaInterface{

  constructor(
    public idFactura: number,
    public fechaIngreso: Date,
    public fechaSalida: Date,
    public valorTotal: number,
    public fechaCreacion: Date,
    public vehiculo: Vehiculo,
    public estado: boolean
    ){  }
}
