<script lang="ts" setup>

</script>

<template>
  <div class="min-h-[100vh] bg-slate-100 dark:bg-black overflow-x-hidden">
    <div class="min-h-[100vh] bg-white dark:bg-zinc-900 shadow-lg md:mx-16 lg:mx-24 xl:mx-36 px-3 sm:px-6 md:px-14 lg:px-20 pt-8 pb-16 flex flex-col">
      <LayoutsBaseHeader />
      <div class="prose prose-neutral dark:prose-invert w-full mx-auto mt-14 prose-a:no-underline overflow-hidden flex flex-col flex-1">
        <div class="flex-1">
          <slot />
        </div>
        <LayoutsBaseFooter class="not-prose" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
