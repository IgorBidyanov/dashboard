<template>
  <button
    class="button"
    :class="{ cancel: props.isCancel }"
    @click="emit('clickHandler')"
    :type="props.type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue'

interface IProps {
  type: ButtonHTMLAttributes['type']
  isCancel: boolean
}

const props = defineProps<Partial<IProps>>()

const emit = defineEmits(['clickHandler'])
</script>

<style lang="scss" scoped>
.button {
  background-color: $blue;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: $dark-blue;
  }

  &.cancel {
    background-color: $dark-gray;

    &:hover {
      background-color: #6c757d;
    }
  }
}
</style>
