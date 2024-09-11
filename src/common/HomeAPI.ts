import API from '@/common/API.ts'

export default {
  async getCount() {
    return API('admin', 'password').get('/api/home/user-count')
  }
}
