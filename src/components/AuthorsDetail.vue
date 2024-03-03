<template>
    <div>
        <h1 class="mt-2 text-2xl">{{ author.name }}</h1>
        <h4 class="mt-1 font-bold">{{ posts.length }} постов написано:</h4>
        <ul>
            <li
                v-for="(post, index) in posts"
                :key="post.id"
                class="hover:bg-blue-700 hover:text-white"
            >
                <router-link :to="'/posts/' + post.id">
                    <p class="mt-3">{{ index + 1 }}) {{ post.title }}</p>
                </router-link>
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
        const authorId = route.params.id
        onMounted(() => {
            postsStore.fetchAuthorDetail(authorId)
        })
        return {
            author: computed(() => postsStore.author),
            posts: computed(() => postsStore.posts),
        }
    },
}
</script>
