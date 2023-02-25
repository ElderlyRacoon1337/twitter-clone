import { Tweet } from '../redux/ducks/tweets/contracts/state';
import axios from '../axios';

export const TweetsApi = {
  async fetchTweets(): Promise<Tweet[]> {
    const { data } = await axios.get('/tweets');
    return data;
  },

  async fetchTweet(id: string): Promise<Tweet> {
    const { data } = await axios.get(`/tweets/?id=${id}`);
    return data;
  },

  async addTweet(text: string): Promise<Tweet> {
    const { data } = await axios.post(`/tweets`, { text: text });
    return data;
  },
};
