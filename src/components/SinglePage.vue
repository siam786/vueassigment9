<script setup>
  import { ref, onMounted, } from 'vue'
  import axios from 'axios'
  import { useRoute } from "vue-router"

  const route = useRoute()
  const postId = route.params.id
  const post = ref({})

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const fetchPostsById = async () => {
    try {
      const res = await axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${postId}`);
      post.value = res.data.postDetails
    } catch (err) {
      console.error(err);
    }
  }

  onMounted(() => {
    fetchPostsById()
  })

</script>

<template>
  <div class="bg-white py-25">
    <div class="flex justify-center items-center">
      <div class="mx-auto px-6 lg:px-8">
        <article v-if="post" class="flex flex-col items-start justify-between bg-gray-100 p-6 rounded-md">
          <div class="flex items-center gap-x-4 text-xs">
            <time datetime="2020-03-16" class="text-gray-500">{{ formatDate(post.created_at) }}</time>
          </div>
          <div class="group">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                {{ post.title }}
            </h3>
            <div class="mt-8 items-center">
              <img :src="post.img" :alt="post.title" class="h-full w-full bg-gray-50">
            </div>
            <p class="mt-5 text-sm leading-6 text-gray-600">{{ post.content }}</p>
          </div>
        </article>
        <article v-else class="flex flex-col items-start justify-between bg-gray-100 p-6 rounded-md">
          <h3 class="mt-3 text-lg font-semibold leading-6">
                <p>No content available for this post !</p><br>
                <span class="text-indigo-500 hover:text-indigo-900 cursor-pointer"><router-link :to="{ name: 'home'}" >Back To Home</router-link></span>
            </h3>
        </article>
      </div>
    </div>
  </div>
</template>
