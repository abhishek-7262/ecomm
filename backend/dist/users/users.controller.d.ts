import { UsersService } from './users.service';
import { User } from './users.schema';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    create(user: Partial<User>): Promise<User>;
    getAll(): Promise<User[]>;
}
