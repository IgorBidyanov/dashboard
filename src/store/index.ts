import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { ICard } from '@/types'

export const useStore = defineStore('store', () => {
  // State
  const cards = ref<ICard[]>([
    {
      id: 1,
      title: 'Card 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias aut ullam consequuntur delectus reprehenderit quae repellendus, iusto illum hic adipisci sunt nihil quod blanditiis impedit sint pariatur molestias natus!'
    },
    {
      id: 2,
      title: 'Card 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias aut ullam consequuntur delectus reprehenderit quae repellendus, iusto illum hic adipisci sunt nihil quod blanditiis impedit sint pariatur molestias natus!'
    }
  ])

  const isDragEnabled = ref<boolean>(true)

  const stateInStorage = localStorage.getItem('store')

  if (stateInStorage) {
    cards.value = JSON.parse(stateInStorage).cards
    isDragEnabled.value = JSON.parse(stateInStorage).isDragEnabled
  }

  // Mutations
  const toggleDragEnabled = (): void => {
    isDragEnabled.value = !isDragEnabled.value
  }

  const addCard = (newCard: ICard): void => {
    cards.value.push(newCard)
  }
  return {
    cards,
    isDragEnabled,
    toggleDragEnabled,
    addCard
  }
})
