import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  fullName?: string | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  location?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  website?: string | null;
};
