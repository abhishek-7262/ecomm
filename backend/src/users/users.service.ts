import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, userDocument, UserSchema } from './users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private UserModel: Model<userDocument>) { }

    async create(userDto: Partial<User>): Promise<User> {
        const { email } = userDto;

        const existingUser = await this.UserModel.findOne({ email }).exec()

        if (existingUser) {
            throw new BadRequestException('Email already in use')
        }

        const user = new this.UserModel(userDto)

        return user.save()
    }

    async findUser(email: string): Promise<User | null> {
        const user = await this.UserModel.findOne({ email })

        return user
    }

    async findAllUser(): Promise<User[]> {
        return this.UserModel.find().exec()
    }


}
