<script lang="ts" setup>

</script>

<template>
  <div>
    <ContentDoc path="me" class="slide-enter-content">
      <template #empty>
        <div class="text-center">
          <Icon name="fxemoji:snowmanwithoutsnow" size="150px" />
          <p class="text-2xl">
            没有内容
          </p>
        </div>
      </template>

      <template #not-found>
        <div class="text-center">
          <Icon name="fxemoji:sheep" size="150px" />
          <p class="text-2xl">
            没有内容
          </p>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<style scoped>

</style>
