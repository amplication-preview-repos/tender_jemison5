import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutTweetsInput;
  content?: string | null;
  likes?: number | null;
  retweets?: number | null;
};
