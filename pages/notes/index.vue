<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import dayjs from 'dayjs'

const { data: posts } = await useAsyncData('notes', () => queryContent('notes').find())

interface ArchivedPost{date:string, posts:ParsedContent[]}

const groupedByYear = posts.value?.reduce((result:ArchivedPost[], post) => {
  const date = dayjs(post.date)
  const year = date.year()

  const yearExists = result.find(item => dayjs(item.date).year() === year)

  if (!yearExists) {
    const newYearObject = { date: year.toString(), posts: [post] }
    result.push(newYearObject)
  } else {
    yearExists.posts.push(post)
  }
  return result
}, [])
</script>

<template>
  <div v-if="groupedByYear&&groupedByYear.length !==0" class="slide-enter-content">
    <div v-for="(group,index) in groupedByYear" :key="index" class="mb-20">
      <h1 class="dark:text-gray-300 text-gray-600">
        {{ group.date }}
      </h1>
      <div class="slide-enter-content flex flex-col">
        <NuxtLink v-for="post in group.posts" :key="post._path" :to="post._path" class="w-fit">
          <div class="flex items-center mb-10">
            <div class="text-2xl mr-4 text-gray-500 hover:text-gray-800 dark:text-zinc-400  dark:hover:text-zinc-200">
              {{ post.title }}
            </div>
            <span class="text-sm text-zinc-500 dark:text-zinc-400">
              {{ formatDate(post.date) }}
            </span>
          </div>
        </NuxtLink>
      </div>
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
</template>

<style scoped>

</style>
