<template>
    <a 
        v-if="props.href"
        :href="props.href" 
        class="l-button px-3 py-2 cursor-pointer font-semibold transition" 
        :class="themeClasses" 
    >
        <slot></slot>
    </a>
    
    <button
        v-else
        :class="themeClasses" 
        class="l-button px-3 py-2 cursor-pointer font-semibold transition">
        <slot></slot>
    </button>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
    href: String,
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

const themeClasses = computed(() => {
    return theme.getThemeClasses(props)
})

</script>