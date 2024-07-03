<template>
  <header class="header">
    <label class="header__switch">
      {{ switchLabel }}
      <Switch :id="1" :modelValue="isDragEnabled" @update:modelValue="toggleDragEnabled()" />
    </label>

    <a class="header__link">
      <router-link to="/createCard">Добавить</router-link>
    </a>
  </header>

  <main>
    <draggable
      v-model="cards"
      tag="ul"
      class="cards__list"
      item-key="card.id"
      :disabled="!isDragEnabled"
    >
      <template #item="{ element: card }">
        <Card :key="card.id" :card="card" @click="showCard(card)" /> </template
      >>
    </draggable>
  </main>

  <DetailsModal v-if="showModal && choosenCard" :card="choosenCard" @toggleModal="toggleModal" />
</template>

<script setup lang="ts">
import Switch from '@/components/SwitchApp.vue'
import Card from '@/components/CardApp.vue'
import DetailsModal from '@/components/DetailsModal.vue'
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'
import { ComputedRef, computed, ref } from 'vue'
import draggable from 'vuedraggable'
import { ICard } from '@/types'

// Store
const store = useStore()
const { isDragEnabled, cards } = storeToRefs(store)
const { toggleDragEnabled } = store

const showModal = ref(false)
const choosenCard = ref<ICard | null>(null)

store.$subscribe(
  (mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
  },
  { detached: true }
)

// Computed
const switchLabel: ComputedRef<string> = computed(() =>
  isDragEnabled.value ? 'Выключить Drag-n-drop' : 'Включить Drag-n-drop'
)

const toggleModal = (): void => {
  showModal.value = !showModal.value
}

const showCard = (card: ICard): void => {
  choosenCard.value = card
  toggleModal()
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;

  &__switch {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
  }

  &__link {
    color: $blue;
  }
}

.cards__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
}

@media (max-width: 1200px) {
  .cards__list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .cards__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cards__list {
    grid-template-columns: 1fr;
  }
}
</style>
