import { Tag } from './../store/ducks/tags/contracts/state';
import axios from 'axios';

export const TagsApi = {
  fetchTags(): Promise<Tag[]> {
    return axios.get('/tags').then(({ data }) => data);
  },
};
