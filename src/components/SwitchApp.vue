<template>
  <div class="vSwitch">
    <input
      :id="props.id.toString()"
      :checked="props.modelValue"
      class="vSwitch__input"
      type="checkbox"
      @change="toggleSwitch"
    />
    <label class="vSwitch__label" @click="toggleSwitch"> Toggle </label>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  id: number
  modelValue: boolean
}

const props = defineProps<IProps>()

const emit = defineEmits(['clickHandler', 'update:modelValue'])

const toggleSwitch = () => {
  emit('update:modelValue')
}
</script>

<style lang="scss" scoped>
.vSwitch {
  display: flex;

  &__input {
    height: 0;
    width: 0;
    margin: 0;
    visibility: hidden;
  }

  &__label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 24px;
    background-color: #e6e7eb;
    display: block;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.3s;

    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 90px;
      transition:
        left 0.3s,
        transform 0.3s;
    }
  }

  &__input:checked + &__label {
    background-color: $blue;
  }

  &__input:checked + &__label::after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
}
</style>
