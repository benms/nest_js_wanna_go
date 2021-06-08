import { AuthenticationService } from '../authentication.service';
import { UsersService } from '../../users/users.service';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import User from '../../users/user.entity';

describe('The AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  beforeEach(() => {
    authenticationService = new AuthenticationService(
      new UsersService(new Repository<User>()),
      new JwtService({
        secretOrPrivateKey: 'Secret key',
      }),
      new ConfigService(),
    );
  });
  describe('when creating a cookie', () => {
    it('should return a string', () => {
      const userId = 1;
      expect(
        typeof authenticationService.getCookieWithJwtToken(userId),
      ).toEqual('string');
    });
  });
});
