<template>
    <button :class="themeClasses">
        <slot></slot>
    </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js'


const props = defineProps({
    color: {
        type: String,
        default: 'red'
    }
})


const { getThemeClasses } = useTheme()
const themeClasses = getThemeClasses(props)

</script>