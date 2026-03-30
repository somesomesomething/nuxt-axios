<script setup>
const axios = useAxios()

const PATH = 'https://jsonplaceholder.typicode.com/posts'

const { data: items } = await useAsyncData('fetchPosts', async () => {
  try {
    const response = await axios.get(PATH)
    return response.data
  }
  catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <pre>
    {{ items }}
  </pre>
</template>
