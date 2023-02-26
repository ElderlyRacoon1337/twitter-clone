import axios from 'axios';

export const AuthApi = {
  async signIn(formData: { email: string; password: string }): Promise<any> {
    const { data } = await axios.post('/users/signin', formData);
    return data;
  },
};
