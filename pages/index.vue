<script lang="ts" setup>
import Typed from 'typed.js'
const posts = await getCurrentYearsPosts()
const introduce = ref(null)

const text = `
  <h1 class="text-zinc-500">
    Hi, I'm inkli.
  </h1>
  <p class="text-xl text-zinc-500"> Enjoy coding.</p>
`

let typed: Typed

onMounted(() => {
  typed = new Typed(introduce.value, {
    strings: [text],
    typeSpeed: 60,
    fadeOut: true,
    showCursor: false,
    cursorChar: ''
  })
})
onUnmounted(() => {
  typed.destroy()
})
</script>

<template>
  <div>
    <div class="min-h-[140px] flex overflow-hidden">
      <div ref="introduce" class="overflow-hidden" />
    </div>
    <div v-if="posts" class="slide-enter-content flex flex-col mt-10">
      <div v-for="post in posts" :key="post._path" class="mb-10">
        <NuxtLink :to="post._path" class="w-fit">
          <div class="flex items-center">
            <div class="text-2xl mr-4 text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200">
              {{ post.title }}
            </div>
            <span class="text-sm text-zinc-500 dark:text-zinc-400">
              {{ formatDate(post.date) }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-else class="slide-enter-content">
      <div class="text-center">
        <Icon name="fxemoji:snowmanwithoutsnow" size="150px" />
        <p class="text-2xl">
          没有内容
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
