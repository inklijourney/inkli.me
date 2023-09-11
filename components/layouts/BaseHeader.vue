<script lang="ts" setup>

</script>

<template>
  <div class="w-full flex items-center">
    <ul class="flex items-center ml-auto">
      <NuxtLink to="/" class="mx-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all">
        Blog
      </NuxtLink>
      <NuxtLink to="/archive" class="mx-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all">
        Archive
      </NuxtLink>
      <NuxtLink to="/notes" class="mx-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all">
        Notes
      </NuxtLink>
      <NuxtLink to="/about" class="mx-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all">
        About
      </NuxtLink>
    </ul>
    <button type="button" class="ml-4">
      <span v-if="$colorMode.preference === 'light'" class="flex items-center justify-center" @click="$colorMode.preference = 'dark'">
        <Icon name="ri:sun-line" class="text-gray-400 text-xl" />
      </span>
      <span v-else class="flex items-center justify-center" @click="$colorMode.preference = 'light'">
        <Icon name="ri:moon-line" class="text-gray-400 text-xl" />
      </span>
    </button>
  </div>
</template>

<style>

</style>
