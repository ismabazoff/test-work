<template>
    <div>
        <h2 class="rounded mt-1 font-bold">Списов постов:</h2>
        <ul>
            <li
                v-for="post in posts"
                :key="post.id"
                class="hover:bg-blue-700 hover:text-white"
            >
                {{ post.id }})
                <router-link :to="'/posts/' + post.id">{{
                    post.title
                }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { usePostsStore } from '@/stores/posts'
import { onMounted, computed } from 'vue'
export default {
    setup() {
        const postsStore = usePostsStore()

        onMounted(() => {
            postsStore.fetchPosts()
        })

        return {
            posts: computed(() => postsStore.posts),
        }
    },
}
</script>
