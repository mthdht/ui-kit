<template>
    <Transition>
        <div class="l-alert" :class="[themeClasses, pharos.theme.padding]" v-show="isOpen">
            <slot></slot>
            <X class="float-right cursor-pointer" v-if="props.dismissible" @click="isOpen = false"></X>
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
const pharos = inject('pharos')

const isOpen = ref(true)

const themeClasses = computed(() => {
    return pharos.getThemeClasses(props, 'alert')
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