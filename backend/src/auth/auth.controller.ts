import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    // @Post('signup)
    // async signup(@Body() body: any) {
    //     return this.authService.signUp(body.userName, body.password)
    // }

    @Post('login')
    async login(@Body() body: any) {
        const user = await this.authService.validateUser(body.userName, body.password);

        if (!user) {
            return { message: "Invalid credentails" }
        }

        return this.authService.login(user)
    }
}
