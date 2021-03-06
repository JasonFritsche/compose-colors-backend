import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { devConfig } from 'src/config/dev.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: devConfig.secret,
    });
  }

  async validate(payload: any) {
    console.log('jwt strategy payload: ', payload);
    return { userId: payload.sub, username: payload.username };
  }
}
