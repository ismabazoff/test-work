import { createRouter, createWebHistory } from 'vue-router'

import PostsList from '@/components/PostList.vue'
import PostDetail from '@/components/PostDetail.vue'
import AuthorsList from '@/components/AuthorsList.vue'
import AuthorsDetail from '@/components/AuthorsDetail.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/posts', name: 'PostsList', component: PostsList },
        { path: '/authors', name: 'AuthorsList', component: AuthorsList },
        { path: '/posts/:id', name: 'PostDetail', component: PostDetail },
        {
            path: '/authors/:id',
            name: 'AuthorDetail',
            component: AuthorsDetail,
        },
    ],
})

export default router
