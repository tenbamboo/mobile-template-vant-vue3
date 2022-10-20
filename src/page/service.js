import { getService } from '@/config/http';

const { base } = getService();

export const getCurrentUser = () => base.get('/users/current-user');

export default {
  getCurrentUser,
};
