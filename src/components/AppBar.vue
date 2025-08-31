<template>
  <v-navigation-drawer
    color="#283342"
    permanent
    width="200"
    class="text-caption"
  >
    <v-list bg-color="#1D242E">
      <v-list-item title="Primecare">
        <template #prepend>
          <v-icon color="red">mdi-cart</v-icon>
        </template>
      </v-list-item>
      <v-list-item>
        <template #prepend>
          <v-avatar size="30" class="mr-2" rounded="sm">
            <img src="https://cdn.vuetifyjs.com/images/john.png" alt="Avatar" />
          </v-avatar>
        </template>
        <v-list-item-title class="text-caption">Admin</v-list-item-title>
        <v-list-item-subtitle class="text-caption"
          >Super Admin</v-list-item-subtitle
        >
        <template #append
          ><v-btn icon="mdi-dots-vertical" variant="text" size="small"></v-btn
        ></template>
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

  <v-app-bar flat height="56">
    <!-- Search Bar -->
    <v-text-field
      append-inner-icon="mdi-magnify"
      density="compact"
      variant="outlined"
      placeholder="Search for anything here"
      rounded="0"
      hide-details
      class="ma-2 text-caption"
      style="max-width: 300px"
    ></v-text-field>

    <v-spacer></v-spacer>

    <!-- Account Icons -->
    <v-btn icon variant="text">
      <v-icon>mdi-bell-badge-outline</v-icon>
    </v-btn>

    <v-btn icon variant="text" @click="toggleTheme">
      <v-icon>{{
        isDarkTheme ? "mdi-brightness-4" : "mdi-brightness-7"
      }}</v-icon>
    </v-btn>

    <v-btn icon variant="text">
      <v-icon>mdi-account</v-icon>
    </v-btn>
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
  { title: "Inventory", icon: "mdi-pill", route: "/inventory" },
  { title: "Suppliers", icon: "mdi-truck-delivery", route: "/suppliers" },
  { title: "Orders", icon: "mdi-cart", route: "/orders" },
  { title: "Reports", icon: "mdi-file-chart", route: "/reports" },
  { title: "Analytics", icon: "mdi-chart-bar", route: "/analytics" },
];
</script>
