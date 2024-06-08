import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  location?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  website?: string | null;
};
