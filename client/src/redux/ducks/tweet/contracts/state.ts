export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Tweet {
  _id: string;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  };
  text: string;
  comments: string[];
  retweets: string[];
  likes: string[];
  createdAt: string;
}

export interface TweetState {
  tweet: Tweet[] | undefined;
  loadingState: LoadingState;
}
