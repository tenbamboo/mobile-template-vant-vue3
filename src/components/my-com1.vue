<template>
  <input :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" />
    {{userInfo}}
    <van-button @click="emitEvent1">hahah1</van-button>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  userInfo: {
    type: Object,
  },
});
const emit = defineEmits(['update:modelValue', 'change']);

function emitEvent1() {
  emit('change', '1');
}
</script>
