<!-- App.vue -->
<template>
    <div>
        <router-link to="/posts">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Посты
            </button>
        </router-link>
        &nbsp;
        <router-link to="/authors">
            <button
                class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Авторы
            </button>
        </router-link>

        <router-view />
    </div>
</template>
