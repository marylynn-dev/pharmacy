<template>
  <v-card class="text-center d-flex flex-column" height="180px">
    <v-card-text class="flex-grow-1 d-flex flex-column justify-center">
      <div class="d-flex align-center justify-center" style="height: 60px">
        <v-icon :color="card.color" size="38px">{{ card.icon }}</v-icon>
      </div>
      <p class="font-weight-bold">{{ card.text }}</p>
      <p>{{ card.subtext }}</p>
    </v-card-text>

    <v-btn
      append-icon="mdi-chevron-right"
      :color="card.color"
      :text="card.action"
      variant="flat"
      block
      rounded="0"
      class="mt-auto"
    ></v-btn>
  </v-card>
</template>

<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>
