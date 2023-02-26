import axios from 'axios';

export const AuthApi = {
  async signIn(formData: any): Promise<any> {
    const { data } = await axios.post('/users/signin', formData);
    return data;
  },
};
