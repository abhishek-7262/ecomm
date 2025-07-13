import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post()
    async create(@Body() user: Partial<User>) {
        return this.userService.create(user)
    }

    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.findAllUser()
    }
}
