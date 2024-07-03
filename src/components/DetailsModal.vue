<template>
  <div class="modal" @click.self="emit('toggleModal')">
    <div class="modal__content">
      <div class="modal__header">
        <h3 class="modal__title">{{ props.card.title }}</h3>
        <button class="close-button" @click="emit('toggleModal')">&times;</button>
      </div>
      <div class="modal-body">
        <p>{{ props.card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICard } from '@/types'

interface IProps {
  card: ICard
}
const emit = defineEmits(['toggleModal'])
const props = defineProps<IProps>()
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    position: relative;
    width: 50%;
    max-height: 50vh;
    padding: 20px;
    border: 1px solid #888;
    background-color: $light-gray;
    overflow-y: auto;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  &__title {
    font-weight: 700;
  }
}

.close-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  width: 24px;
  max-width: 24px;
  min-height: 24px;
  height: 24px;
  max-height: 24px;
  border-radius: 50%;
  border: 1px solid #d4d5d9;
  outline: none;
  background: #fbfbfc;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    height: 2px;
    width: 12px;
    background: #c01718;
  }
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    height: 2px;
    width: 12px;
    background: #c01718;
  }
  &:hover {
    background: #c01718;
    &::after,
    &::before {
      background: #fff;
    }
  }
}
</style>
