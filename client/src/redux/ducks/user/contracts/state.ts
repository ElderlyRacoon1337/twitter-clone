export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  AUTH_ERROR = 'AUTH_ERROR',
}

export interface User {
  _id?: string;
  email: string;
  fullName: string;
  userName: string;
  passwordHash: string;
  confirmed: boolean;
  confirmedHash: string;
  location?: string;
  about?: string;
  website?: string;
  avatarUrl: string;
}

export interface UserState {
  data: User | undefined;
  loadingState: LoadingState;
}
