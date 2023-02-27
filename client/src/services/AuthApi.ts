import axios from 'axios';

export const AuthApi = {
  async signIn(formData: any): Promise<any> {
    const { data } = await axios.post('/users/signin', {
      username: formData.usernameOrEmail,
      password: formData.password,
    });
    return data;
  },

  async signUp(formData: any): Promise<any> {
    const { data } = await axios.post('/users/signup', formData);
    return data;
  },

  async getMe(): Promise<any> {
    const { data } = await axios.get('/users/me');
    return data;
  },
};
