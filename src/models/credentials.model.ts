import {Model, model, property} from '@loopback/repository';

@model()
export class Credentials extends Model {
  @property({
    type: 'string',
    required: true,
  })
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'string',
    required: true,
  })
  rol: string;

  constructor(data?: Partial<Credentials>) {
    super(data);
  }
}

export interface CredentialsRelations {
  // describe navigational properties here
}

export type CredentialsWithRelations = Credentials & CredentialsRelations;
