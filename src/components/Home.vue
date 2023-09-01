<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'

    const posts = ref([])
    async function fetchNewestPosts() {
        let url = 'https://basic-blog.teamrabbil.com/api/post-newest'
        const response = await axios.get(url)
        posts.value = response.data
    }
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    onMounted(() => {
        fetchNewestPosts()
    })

</script>

<template>
    <div class="bg-white py-24 sm:py-3">
        <h2 class="text-3xl font-bold tracking-tight text-indigo-500 sm:text-2xl text-center">নতুন পোস্ট</h2>
        <div class="mx-auto px-6 lg:px-8">
            <div
                class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                <article class="flex flex-col items-start justify-between bg-gray-100 p-6 rounded-md"
                    v-for="(post, index) in posts" :key="index">
                    <div class="flex items-center gap-x-4 text-xs">
                        <time datetime="2020-03-16" class="text-gray-500">{{ formatDate(post.created_at) }}</time>
                    </div>
                    <router-link :to="'/post/' + post.id">
                        <div class="group">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                {{ post.title }}
                            </h3>
                            <div class="mt-8 items-center">
                                <img :src="post.img" :alt="post.title" class="h-full w-full bg-gray-50">
                            </div>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.short }}</p>
                        </div>
                    </router-link>
                </article>
            </div>
        </div>
    </div>
</template>
