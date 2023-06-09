import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User, UserData } from 'src/schema/user.schema';
import { UserService } from 'src/service/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(
    @Args('userData')
    userData: UserData,
  ): Promise<User> {
    const user: UserData = userData;

    return this.userService.createUser(user);
  }

  @Query(() => User)
  async getUserById(@Args('id') id: number): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Query(() => User)
  async getUserByEmail(@Args('email') email: string): Promise<User> {
    return this.userService.getUserByEmail(email);
  }

  @Query(() => [User])
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
