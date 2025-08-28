<template>
  <v-card
    class="text-center d-flex flex-column"
    height="120px"
    variant="outlined"
    rounded="0"
    density="compact"
    :style="{
      borderColor: card.color,
      borderWidth: '2px',
      borderStyle: 'solid',
    }"
  >
    <v-card-text
      class="flex-grow-1 d-flex flex-column justify-center pa-2"
      density="compact"
      style="background-color: white"
    >
      <div class="d-flex align-center justify-center" style="height: 40px">
        <v-icon :color="card.color" size="24px">{{ card.icon }}</v-icon>
      </div>
      <p class="font-weight-bold text-truncate" style="font-size: 0.75rem">
        {{ card.text }}
      </p>
      <p class="text-truncate" style="font-size: 0.7rem">
        {{ card.subtext }}
      </p>
    </v-card-text>

    <v-btn
      append-icon="mdi-chevron-right"
      :color="card.color"
      :text="card.action"
      variant="flat"
      block
      rounded="0"
      density="compact"
      style="font-size: 0.7rem; min-height: 28px"
    />
  </v-card>
</template>

<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
    // Example: { color: 'red', icon: 'mdi-home', text: 'Title', subtext: 'Details', action: 'Go' }
  },
});
</script>
