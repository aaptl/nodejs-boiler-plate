import { Request } from 'express';
import { User } from '../entities/user.entity';

export default interface IRequest extends Request {
  user: any;
}
