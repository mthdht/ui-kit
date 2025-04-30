<template>
    <Transition>
        <div class="l-alert" :class="[themeClasses, theme.theme.padding]" v-show="isOpen">
            <slot></slot>
            <X class="float-right" v-if="props.dismissible" @click="isOpen = false"></X>
        </div>
    </Transition>
</template>

<script setup>
import { inject, computed, ref } from 'vue'
import { X } from 'lucide-vue-next'


const props = defineProps({
    color: {
        type: String,
        default: 'red'
    },
    dismissible: {
        type: Boolean,
        default: true
    }
})
const theme = inject('theme')

const isOpen = ref(true)

const themeClasses = computed(() => {
    console.log(theme.getThemeClasses(props, 'button'));
    return theme.getThemeClasses(props, 'alert')
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>