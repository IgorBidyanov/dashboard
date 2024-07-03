<template>
  <li class="card">
    <div class="card-header">
      <h3 class="card-title">{{ props.card.title }}</h3>
    </div>
    <div class="card-body">
      <p class="card-description">{{ props.card.description }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { ICard } from '@/types'
interface IProps {
  card: ICard
}
const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
}

.card-header {
  background-color: $blue;
  padding: 16px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.card-body {
  padding: 16px;
  min-height: 125px;
}

.card-description {
  display: -webkit-box;
  font-size: 14px;
  color: $dark-gray;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
