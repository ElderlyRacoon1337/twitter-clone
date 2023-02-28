import { Tweet } from '../redux/ducks/tweets/contracts/state';
import axios from '../axios';

export const TweetsApi = {
  async fetchTweets(): Promise<Tweet[]> {
    const { data } = await axios.get('/tweets');
    return data;
  },

  async fetchTweet(id: string): Promise<Tweet> {
    const { data } = await axios.get(`/tweets/${id}`);
    return data;
  },

  // @ts-ignore
  async addTweet({ text, imageUrls }): Promise<Tweet> {
    const { data } = await axios.post(`/tweets`, { text: text, imageUrls });
    return data;
  },

  async deleteTweet(id: string) {
    await axios.delete(`/tweets/${id}`);
  },
};
