import { DataSource } from 'typeorm';
import { Club } from './club';

export const photoProviders = [
  {
    provide: 'CLUB_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Club),
    inject: ['DATA_SOURCE'],
  },
];