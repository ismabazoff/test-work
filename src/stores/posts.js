import { defineStore } from 'pinia'

const url = 'https://jsonplaceholder.typicode.com'

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        authors: [],
        post: {},
        author: {},
        comments: [],
    }),
    actions: {
        async fetchPosts() {
            const response = await fetch(`${url}/posts`)
            this.posts = await response.json()
        },

        async fetchAuthors() {
            const response = await fetch(`${url}/users`)
            this.authors = await response.json()
        },

        async fetchPostDetail(postId) {
            const postResponse = await fetch(`${url}/posts/${postId}`)
            this.post = await postResponse.json()

            const authorResponse = await fetch(
                `${url}/users/${this.post.userId}`
            )
            this.author = await authorResponse.json()

            const commentsResponse = await fetch(
                `${url}/comments?postId=${postId}`
            )
            this.comments = await commentsResponse.json()
        },

        async fetchAuthorDetail(authorId) {
            const authorResponse = await fetch(`${url}/users/${authorId}`)
            this.author = await authorResponse.json()

            const postsResponse = await fetch(`${url}/posts?userId=${authorId}`)
            this.posts = await postsResponse.json()
        },
    },
})
