import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private _usersRepository: UsersRepository,
  ) {}

  public async findByUsername(username: string): Promise<UserDto> {
    const user = await this._usersRepository.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new NotFoundException(`User ${username} not found`);
    }

    return user;
  }

  public async findByEmail(email: string): Promise<UserDto> {
    const user = await this._usersRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new NotFoundException(`User ${email} not found`);
    }

    return user;
  }

  async createUser(createUserDto: UserDto): Promise<UserEntity> {
    return this._usersRepository.createUser(createUserDto);
  }
}
