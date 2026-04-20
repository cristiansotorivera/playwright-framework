class PostsApi {
  constructor(request) {
    this.request = request;
  }

  async getPosts() {
    return await this.request.get('/posts');
  }

  async createPost(payload) {
    return await this.request.post('/posts', {
      data: payload,
    });
  }

  async getPostById(id) {
    return await this.request.get(`/posts/${id}`);
  }

  async updatePost(id, payload) {
    return await this.request.put(`/posts/${id}`, {
      data: payload,
    });
  }
}

module.exports = { PostsApi };