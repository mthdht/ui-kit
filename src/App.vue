<script setup>
import Button from '@/components/Button.vue';
import Alert from '@/components/Alert.vue'
import { Plus } from 'lucide-vue-next'
import Badge from './components/Badge.vue';
</script>

<template>
  <div class="p-4 space-y-8">
    <Button shadow variant="outline">
      <Plus class=""></Plus>
      Lorem, ipsum.
    </Button>

    <Alert shadow>
      ok
    </Alert>

    <Badge color="emerald" size="base" variant="outline">some badge</Badge>
  </div>
  
</template>

<style scoped>
</style>
