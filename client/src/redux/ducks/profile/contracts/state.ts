export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  AUTH_ERROR = 'AUTH_ERROR',
}

export interface Profile {
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
  tweets?: [];
  createdAt: any;
}

export interface ProfileState {
  data: Profile | undefined;
  loadingState: LoadingState;
}
