<template>
  <AppBar />
  <v-main>
    <!-- <PageHeader
      :title="route.meta.title || 'Untitled'"
      :subtitle="route.meta.subtitle || ''"
    /> -->
    <router-view />
  </v-main>
  <!-- <AppFooter /> -->
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
