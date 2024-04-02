<template>
  <svg aria-hidden="true" width="1em" height="1em" v-bind="$attrs">
    <use :xlink:href="symbolId" fill="currentColor"></use>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  /** 本地图标名称 */
  localIcon: {
    type: String
  }
})

const symbolId = computed(() => {
  const preffix = 'icon-local'
  const defaultLocalIcon = 'no-icon'
  const icon = props.localIcon || defaultLocalIcon
  return `#${preffix}-${icon}`
})
</script>
