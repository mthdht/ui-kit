<script setup>
import Button from '@/components/Button.vue';
import Alert from '@/components/Alert.vue'
import { Plus } from 'lucide-vue-next'
import Badge from './components/Badge.vue';
import Avatar from './components/Avatar.vue';
</script>

<template>
  <div class="p-4 space-y-8">
    <Button shadow variant="base">
      <Plus class=""></Plus>
      Lorem, ipsum.
    </Button>

    <Alert shadow>
      ok
    </Alert>

    <Badge color="orange" variant="light" rounded="medium" size="small">Orange</Badge>

    <br>

    <Avatar src="ok"></Avatar>
  </div>
  
</template>

<style scoped>
</style>
