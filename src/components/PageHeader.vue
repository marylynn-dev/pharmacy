<template>
  <v-row>
    <v-col cols="12" md="8" lg="4">
      <p class="text-h5 font-weight-bold">{{ title }}</p>
      <p class="font-weight-light text-secondary">{{ subtitle }}</p>
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
});
</script>
