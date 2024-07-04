<template>
  <div class="createCard">
    <div class="createCard__form">
      <h2 class="createCard__title">Создание новой карточки</h2>
      <form @submit.prevent="submitForm">
        <div class="createCard__form-item">
          <label class="createCard__label" for="title">Заголовок:</label>
          <input
            v-model="title"
            class="createCard__input"
            :class="{ error: titleError }"
            type="text"
            id="title"
            maxlength="25"
          />
          <p class="createCard__error">{{ titleError }}</p>
        </div>

        <div class="form__item">
          <label class="createCard__label" for="description">Описание:</label>
          <textarea
            v-model="description"
            class="createCard__input"
            :class="{ error: descriptionError }"
            id="description"
            rows="5"
          ></textarea>
          <p class="createCard__error">{{ descriptionError }}</p>
        </div>

        <div class="createCard__form-buttons">
          <Button type="submit">Добавить</Button>
          <Button @clickHandler="cancelForm" isCancel>Отменить</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ButtonApp.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { ICard } from '@/types'

const router = useRouter()

// Store
const store = useStore()
const { addCard } = store

const title = ref<string>('')
const titleError = ref<string>('')
const description = ref<string>('')
const descriptionError = ref<string>('')

// Methods
const cancelForm = (): void => {
  router.push('/')
}

const submitForm = (): void => {
  const regExp: RegExp = /^[a-zA-Zа-яА-Я0-9\s]+$/
  const isTitleValid: boolean = regExp.test(title.value) && title.value.length >= 6
  const isDescriptionValid: boolean = description.value.length >= 10

  if (!isTitleValid) {
    titleError.value =
      'Заголовок должен содержать более 6 символов и не содержать специальных символов'
  }

  if (!isDescriptionValid) {
    descriptionError.value = 'Описание должно содержать более 10 символов'
  }

  if (isTitleValid && isDescriptionValid) {
    const newCard: ICard = {
      id: Date.now(),
      title: title.value,
      description: description.value
    }
    addCard(newCard)
    router.push('/')
  }
}
</script>

<style scoped lang="scss">
.createCard {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - $padding-app * 2);

  &__form {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 32px;
    width: 50vw;

    &-item {
      margin-bottom: 16px;
    }
  }

  &__item {
    margin-bottom: 24px;
  }

  &__title {
    margin-bottom: 12px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  &__label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
  }

  &__input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-family: inherit;

    &.error {
      margin-bottom: 12px;
      border-color: red;
    }
  }

  &__error {
    color: red;
    font-size: 12px;
  }

  &__form-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
}
</style>
