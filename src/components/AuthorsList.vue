<template>
    <div>
        <h2 class="rounded mt-1 font-bold">Список авторов:</h2>
        <ul>
            <li
                v-for="author in authors"
                :key="author.id"
                class="hover:bg-blue-700 hover:text-white"
            >
                {{ author.id }})
                <router-link :to="'/authors/' + author.id">{{
                    author.name
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
            postsStore.fetchAuthors()
        })

        return {
            authors: computed(() => postsStore.authors),
        }
    },
}
</script>
