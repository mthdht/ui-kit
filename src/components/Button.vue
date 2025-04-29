<template>
    <button
        :class="themeClasses" 
        class="px-3 py-2 cursor-pointer font-semibold transition">
        <slot></slot>
    </button>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'red'
    },
    hover: {
        type: Boolean,
        default: true
    },
    outline: {
        type: Boolean,
        default: false
    },
    rounded: {
        type: String,
        default: 'base',
        validator(value) {
            return ['base', 'none', 'large', 'full'].includes(value)
        }
    }
})
const theme = inject('theme')
const themeClasses = theme.getThemeClasses(props)

</script>