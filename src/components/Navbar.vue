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
    <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <router-link :to="{name: 'home'}">
                            <img class="h-8 w-auto bg-white" src="https://www.transparentpng.com/thumb/house/house-clipart-png-file-13.png"
                            alt="Your Company" />
                        </router-link>
                    </div>
                    <div class="sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <div v-for="(category, index) in categories" :key="index"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
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
