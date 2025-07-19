import { User, userDocument } from './users.schema';
import { Model } from 'mongoose';
export declare class UsersService {
    private UserModel;
    constructor(UserModel: Model<userDocument>);
    create(userDto: Partial<User>): Promise<User>;
    findUser(email: string): Promise<User | null>;
    findAllUser(): Promise<User[]>;
}
