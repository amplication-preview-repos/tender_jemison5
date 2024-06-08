import { Like } from "../like/Like";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  fullName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  location: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  website: string | null;
};
