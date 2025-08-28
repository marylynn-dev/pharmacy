<template>
  <v-navigation-drawer color="#283342" permanent width="200" nav>
    <v-list bg-color="#1D242E">
      <v-list-item title="Primecare">
        <template #prepend>
          <v-icon color="red">mdi-cart</v-icon>
        </template>
      </v-list-item>
    </v-list>

    <!-- Navigation Links -->
    <v-list nav active-color="#1D242E">
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.route"
        link
      />
    </v-list>

    <template #append>
      <v-btn text="Log out"></v-btn>
    </template>
  </v-navigation-drawer>

  <v-app-bar flat height="40 ">
    <v-container>
      <v-row>
        <!-- Search Bar -->
        <v-col cols="12" md="8" lg="4">
          <v-text-field
            append-inner-icon="mdi-magnify"
            density="compact"
            variant="outlined"
            placeholder="Search Here"
            rounded="0"
            class="d-flex"
            min-width="200px"
          ></v-text-field>
        </v-col>

        <v-spacer></v-spacer>

        <!-- Account Icons -->
        <v-col class="d-flex align-center justify-end ga-5">
          <v-icon>mdi-bell-badge-outline</v-icon>
          <v-btn icon @click="toggleTheme" variant="text">
            <v-icon>{{
              isDarkTheme ? "mdi-brightness-4" : "mdi-brightness-7"
            }}</v-icon>
          </v-btn>
          <v-icon>mdi-account</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from "vuetify";
import { computed } from "vue";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === "myCustomLightTheme"
      ? "myCustomDarkTheme"
      : "myCustomLightTheme";
};

const isDarkTheme = computed(() => theme.global.current.value.dark);

const navigationItems = [
  { title: "Dashboard", icon: "mdi-view-dashboard", route: "/dashboard" },
  { title: "Medication", icon: "mdi-pill", route: "/medications" },
  { title: "Suppliers", icon: "mdi-truck-delivery", route: "/suppliers" },
  { title: "Orders", icon: "mdi-cart", route: "/orders" },
  { title: "Reports", icon: "mdi-file-chart", route: "/reports" },
  { title: "Analytics", icon: "mdi-chart-bar", route: "/analytics" },
];
</script>
