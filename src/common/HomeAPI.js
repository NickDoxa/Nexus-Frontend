import API from '@/common/API.js'

export default {
  async getCount() {
    return API().get('/api/home/user-count')
  }
}