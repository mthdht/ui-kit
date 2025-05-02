<template>
    <span class="l-badge inline-flex items-center gap-2" :class="[themeClasses, pharos.theme.padding]">
        <slot></slot>
    </span>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'default'
    },
    unstyle: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'base',
        validator(value) {
            return ['base', 'large', 'small'].includes(value)
        }
    },
    hover: {
        type: Boolean,
        default: false
    },
    rounded: {
        type: String,
        default: 'full',
        validator(value) {
            return ['normal', 'none', 'large', 'full'].includes(value)
        }
    },
    outline: {
        type: Boolean,
        default: false
    },
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'button')
})
</script>

<style scoped>

</style>