import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from '../../user/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  public login(email: string, password: string, id: number): string {
    const user = this.usersService.findOneById(1);
    console.log(email, password);
    return 'SECRET TOKEN';
  }

  public isAuthenticated(token: string): boolean {
    return true;
  }
}
