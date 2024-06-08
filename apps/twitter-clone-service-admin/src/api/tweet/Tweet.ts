import { Comment } from "../comment/Comment";

export type Tweet = {
  author: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  likes: number | null;
  retweets: number | null;
  updatedAt: Date;
};
