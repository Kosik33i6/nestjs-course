import {
  Injectable,
  Inject,
  forwardRef,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from '../../auth/providers/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 * Class to connect to users table and perform business operations
 */

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    // * Injecting ConfigService
    private readonly configService: ConfigService,
  ) {}

  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Check if user with the same emial exist
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    // Handle exception
    if (existingUser) throw new ConflictException('Email already exists');
    // Create a new User
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }
  /**
   * Find all users with pagination and filtering
   */

  public getAll(limit: number, page: number) {
    const env = this.configService.get<string>('S3_BUCKET');
    console.log(env);

    // const isAuth = this.authService.isAuthenticated('SECRET TOKEN');
    return [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
      },
      {
        firstName: 'Marek',
        lastName: 'Kojima',
        email: 'marek@doe.com',
      },
    ];
  }

  /**
   * Find single user by id of the user
   */

  public async findOneById(id: number) {
    if (!id) throw new NotFoundException('User not found');
    return await this.userRepository.findOneBy({ id });
  }
}
