import { Get } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersDto } from '../models/users.dto';
import { UsersEntity } from '../models/users.entity';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly _userService: UsersService) {}

    @Post()
    async createUser(@Body() user: UsersDto): Promise<UsersEntity> {
        const createdUser = await this._userService.createUsers(user);
        return createdUser;
    }

    @Get()
    async getUsers(): Promise<UsersEntity[]> {
        const users = await this._userService.getAll();
        return users;
    }

}
