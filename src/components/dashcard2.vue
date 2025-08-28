<template>
  <v-card variant="outlined" class="pa-0 rounded-sm" height="90">
    <!-- Top row (smaller) -->
    <v-card-title class="py-0 px-2">
      <v-row align="center" no-gutters class="w-100">
        <v-col class="pa-1">
          <div
            class="text-caption font-weight-medium"
            style="font-size: 0.7rem"
          >
            Inventory
          </div>
        </v-col>
        <v-col class="pa-0 text-right">
          <div style="font-size: 0.7rem">Go to Configuration >></div>
        </v-col>
      </v-row>
    </v-card-title>

    <!-- Divider now spans full card width -->
    <v-divider />

    <!-- Bottom row (larger but still compact) -->
    <v-card-text class="py-1 px-2">
      <v-row no-gutters>
        <v-col class="pa-0">
          <div class="text-subtitle-2 font-weight-bold" style="font-size: 1rem">
            298
          </div>
          <div class="text-caption" style="font-size: 0.7rem">
            Total Medicines
          </div>
        </v-col>
        <v-col class="pa-0">
          <div class="text-subtitle-2 font-weight-bold" style="font-size: 1rem">
            298
          </div>
          <div class="text-caption" style="font-size: 0.7rem">
            Total Medicines
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
