import { Tweet } from './../store/ducks/tweets/contracts/state';
import axios from 'axios';

export const TweetsApi = {
  fetchTweets(): Promise<Tweet[]> {
    return axios.get('/tweets').then(({ data }) => data);
  },

  fetchTweet(id: string): Promise<Tweet[]> {
    return axios.get(`/tweets/?_id=${id}`).then(({ data }) => data);
  },

  addTweet(tweet: Tweet): Promise<Tweet> {
    return axios.post(`/tweets`, tweet).then(({ data }) => data);
  },
};
