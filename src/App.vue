<script setup>
import Button from '@/components/Button.vue';
import Alert from '@/components/Alert.vue'
import { Plus } from 'lucide-vue-next'
</script>

<template>
  <div class="p-4 space-y-8">
    <Button rounded="large" size="large">
      <Plus class="" size="50"></Plus>
      Lorem, ipsum.
    </Button>

    <Alert>
      ok
    </Alert>
  </div>
  
</template>

<style scoped>
</style>
