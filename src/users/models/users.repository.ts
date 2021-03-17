import { Repository, EntityRepository } from 'typeorm';
import { UsersEntity } from './users.entity';

@EntityRepository(UsersEntity)
export class UserRepository extends Repository<UsersEntity> {}