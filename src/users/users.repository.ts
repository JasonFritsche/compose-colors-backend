import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from './dto/user.dto';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
  /**
   * creates new user in db
   * @param userData
   */
  async createUser(userData: UserDto): Promise<UserEntity> {
    const user = new UserEntity();
    user.username = userData.username;
    user.password = userData.password;
    user.email = userData.email;
    await user.save();
    console.log('saving user in user.repository.ts ...');
    return user;
  }
}
