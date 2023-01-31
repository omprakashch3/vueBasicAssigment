<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-items class="hidden-sm-and-down text--caption">
        <v-menu
          :close-on-content-click="false"
          open-on-hover
          bottom
          offset-y
          max-height="75%"
          min-width="20%"
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click="gotoPage(`/`)"> Home </v-btn>
          </template>
        </v-menu>
        <v-menu
          :close-on-content-click="false"
          open-on-hover
          bottom
          offset-y
          max-height="75%"
          min-width="20%"
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click="gotoPage(`/getdata`)"> GetData </v-btn>
          </template>
        </v-menu>
        <v-menu
          :close-on-content-click="false"
          open-on-hover
          bottom
          offset-y
          max-height="75%"
          min-width="20%"
        >
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click="gotoPage(`/openform`)"> Form </v-btn>
          </template>
        </v-menu>
      </v-toolbar-items>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  }),
  methods: {
    gotoPage(addr) {
      this.$router.push(addr);
    },
  },
};
</script>
