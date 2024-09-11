import API from '@/common/API.ts'

export default {
  async getCount() {
    return API("", "").get('/api/home/user-count')
  }
}