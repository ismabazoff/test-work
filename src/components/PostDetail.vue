<template>
    <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <p><strong>Автор:</strong> {{ author.name }}</p>
        <p><strong>Кол-во комментариев:</strong> {{ comments.length }}</p>
        <hr />
        <h3>Комментарии:</h3>
        <ul>
            <li v-for="comment in comments" :key="comment.id">
                <p>
                    <strong>{{ comment.name }}</strong>
                </p>
                <p>{{ comment.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { usePostsStore } from '@/stores/posts'
import { onMounted, computed } from 'vue'
export default {
    setup() {
        const postsStore = usePostsStore()
        const route = useRoute()
        const postId = route.params.id
        onMounted(() => {
            postsStore.fetchPostDetail(postId)
        })

        return {
            post: computed(() => postsStore.post),
            author: computed(() => postsStore.author),
            comments: computed(() => postsStore.comments),
        }
    },
}
</script>
