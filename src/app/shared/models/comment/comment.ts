import { UserStub } from '../stubs/user.stub';
import { RecipeStub } from '../stubs/recipe.stub';

export class Comment {
  id?: string;
  text?: string;
  createdAt?: Date;
  user?: UserStub;
  recipe?: RecipeStub;
}
