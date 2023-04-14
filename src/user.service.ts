import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { PaginateModel, QueryOptions } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  model: any;
  constructor(@InjectModel(User.name) model: PaginateModel<UserDocument>) {
    this.model = model;
  }

  /**
   * Find many by
   * @param query object, default = {}
   * @param options object, default = {}
   * @returns Promsie<T|null>
   */
  public async findManyBy(
    query = {},
    options: QueryOptions = {},
  ): Promise<any> {
    return this.model.find(query, options.projection || {}, options).lean();
  }
}
