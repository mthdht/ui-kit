<template>
    <a 
        v-if="props.href"
        :href="props.href" 
        class="l-button flex items-center gap-2 cursor-pointer font-semibold transition disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed" 
        :class="themeClasses" 
    >
        <slot></slot>
    </a>

    <button
        v-else
        type="button"
        :class="themeClasses" 
        class="l-button flex items-center gap-2 cursor-pointer font-semibold transition disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed">
        <slot></slot>
    </button>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
    href: String,
    color: {
        type: String,
        default: 'slate'
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
        default: true
    },
    outline: {
        type: Boolean,
        default: false
    },
    rounded: {
        type: String,
        default: 'normal',
        validator(value) {
            return ['normal', 'none', 'large', 'full'].includes(value)
        }
    },
    shadow: {
        type: Boolean,
        default: true
    },
    unstyle: {
        type: Boolean,
        default: false
    },
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'button')
})

</script>