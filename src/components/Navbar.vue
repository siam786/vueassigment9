<script setup>
    import { onMounted, ref } from "vue"
    import axios from "axios"

    const categories = ref([])

    async function getCategories() {
        let url = "https://basic-blog.teamrabbil.com/api/post-categories"
        let response = await axios.get(url)
        categories.value = response.data
    }

    onMounted(() => {
        getCategories()
    });
</script>

<template>
    <nav class="bg-emerald-900">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <router-link :to="{name: 'home'}">
                            <h1 class="text-xl font-bold text-white">News Bangla</h1>
                        </router-link>
                    </div>
                    <div class="sm:ml-6 sm:block">  
                        <div class="flex space-x-4">
                            <div v-for="(category, index) in categories" :key="index"
                                class="text-white hover:bg-red-700 hover:text-white rounded-md px-3 py-3 text-sm font-medium cursor-pointer"
                                aria-current="page">
                                <router-link :to="'/category/' + category.id">
                                    {{ category.name }}
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <router-view :key="$route.fullPath" />
</template>
