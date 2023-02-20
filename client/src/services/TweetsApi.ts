import { Tweet } from './../store/ducks/tweets/contracts/state';
import axios from 'axios';

export const TweetsApi = {
  fetchTweets(): Promise<Tweet[]> {
    return axios.get('/tweets').then(({ data }) => data);
  },
};
