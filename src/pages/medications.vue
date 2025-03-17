<template>
  <v-container>
    <PageHeader
      title="Medications"
      subtitle="List of medicines available for sale"
    />
    <v-row>
      <v-col v-for="card in cardData" cols="3">
        <dashcard :card="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const cardData = [
  {
    text: "Good",
    action: "View Report",
    subtext: "Inventory Status",
    icon: "mdi-check-circle-outline",
    color: "green",
  },
  {
    text: "298",
    subtext: "Medicines Available",
    action: "Remove Expired Items",
    icon: "mdi-medical-bag",
    color: "red",
  },
  {
    text: "01",
    subtext: "Medicine Shortage",
    action: "Review Stock",
    icon: "mdi-plus-circle-outline",
    color: "blue",
  },
];

//
</script>
