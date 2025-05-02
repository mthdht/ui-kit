<template>
    <div class="inline-block overflow-hidden" :class="[themeClasses]">
        <img :src="props.src" :alt="props.alt">
    </div>
</template>

<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: 'default'
    },
    src: String,
    alt: String,
    unstyle: {
        type: Boolean,
        default: false
    },
    aspect: {
        type: String,
        default: 'circle',
        validator(value) {
            ['circle', 'square'].includes(value)
        }
    }
})

const pharos = inject('pharos')

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'button')
})
</script>

<style scoped>

</style>