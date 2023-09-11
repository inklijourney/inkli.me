<script lang="ts" setup>
defineProps({
  iconName: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true }
})
</script>

<template>
  <NuxtLink :to="url" target="_blank" rel="noopener">
    <Icon :name="iconName" class="mr-2" size="20px" />
    <span class="align-middle text-lg">{{ name }}</span>
  </NuxtLink>
</template>

<style scoped>

</style>
