<template>
    <button :class="themeClasses" class="px-3 py-2 cursor-pointer rounded font-semibold">
        <slot></slot>
    </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js'


const props = defineProps({
    color: {
        type: String,
        default: 'red'
    },
    hover: {
        type: Boolean,
        default: true
    }
})


const { getThemeClasses } = useTheme()
const themeClasses = getThemeClasses(props)

</script>