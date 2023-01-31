<template>
  <div>
    <v-app-bar app color="amber lighten-1" dense>
      <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu">
      </v-app-bar-nav-icon>
      <v-app-bar-title class="hidden-sm-and-up">
        <router-link to="/" class="white--text" style="text-decoration: none"
          >Dashboard</router-link
        >
      </v-app-bar-title>

      <v-toolbar-items class="hidden-sm-and-down text--caption">
        <!-- Catalog MENU -->
        <v-menu
          :close-on-content-click="false"
          open-on-hover
          bottom
          offset-y
          max-height="75%"
          min-width="20%"
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on"> Catalog </v-btn>
          </template>
          <!-- <NavigationMenu :data="Catalog"> </NavigationMenu> -->
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
// import _ from "lodash";

export default {
  name: "NavigationDrawer",
  data() {
    return {
      sidebarMenu: false,
      toggleMini: false,
      activate: true,
      language: 0,
      // languageText: "En",
      languages: ["En", "Hi", "Gu"],
      hubsList: [],
      // selectedHub: {},
    };
  },
};
</script>
