import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDto, UsersRole } from '../models/users.dto';
import { UsersEntity } from "../models/users.entity";
import { UserRepository } from '../models/users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly _userRepository: UserRepository
    ) {}

    async createUsers ( user_data: UsersDto ) {
        const newUser = new UsersEntity();
        newUser.name = user_data.name
        newUser.email = user_data.email
        newUser.password = user_data.password
        newUser.role = UsersRole.CLIENT

        return await this._userRepository.save(newUser)
    }

    async getAll() {
        return this._userRepository.find()
    }

}
