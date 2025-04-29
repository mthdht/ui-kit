<template>
    <button :class="themeClasses">
        <slot></slot>
    </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js'

const { getThemeClasses } = useTheme()
const themeClasses = getThemeClasses()

</script>