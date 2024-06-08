import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  content?: string | null;
  likes?: number | null;
  retweets?: number | null;
};
