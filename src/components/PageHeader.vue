<template>
  <v-row align="center">
    <v-col cols="12" md="6" lg="4">
      <p class="text-subtitle-1 font-weight-bold">{{ title }}</p>
      <p class="text-body-2 text-secondary">{{ subtitle }}</p>
    </v-col>
    <v-spacer />
    <v-col cols="auto">
      <v-btn :variant="btnVariant" rounded="sm" size="small" :color="btnColor" :prepend-icon="btnIcon" class="text-caption">
        {{ text }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  text: {
    type: String,
    default: "Add New",
  },
  btnColor: {
    type: String,
  },
  btnVariant: {
    type: String,
    default: "flat",
  },
  btnIcon: {
    type: String,
  },
});
</script>
