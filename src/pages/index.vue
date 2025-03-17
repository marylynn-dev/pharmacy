<template>
  <v-container>
    <PageHeader
      title="Dashboard"
      subtitle="A quick data overview of the inventory"
    />
    <v-row>
      <v-col v-for="card in cardData" cols="3">
        <dashcard :card="card" />
      </v-col>
    </v-row>

    <v-row v-for="n in 2">
      <v-col v-for="n in 2">
        <dashcard2 />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import PageHeader from "@/components/PageHeader.vue";

const cardData = [
  {
    text: "Good",
    action: "View Report",
    subtext: "Inventory Status",
    icon: "mdi-check-circle-outline",
    color: "green",
  },
  {
    text: "Ksh 2000000",
    action: "Reorder Now",
    subtext: "Revenue: Jan 2022",
    icon: "mdi-alert-circle-outline",
    color: "orange",
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
