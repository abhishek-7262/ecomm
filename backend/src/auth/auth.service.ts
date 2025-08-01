import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findUser(email)

        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    };

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    };

    //     async signup(username: string, password: string) {
    //     const user = await this.usersService.createUser(username, password);
    //     return this.login(user);
    //   }
}
