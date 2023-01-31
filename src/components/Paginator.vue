<template>
  <div class="text-center">
    <v-container fluid>
      <v-row class="mt-2 mb-1" align="center" justify="start">
        <div>
          <span v-if="config.title == 'Records per page'" class="grey--text">
            Records per page
          </span>
        </div>

        <!-- <span class="grey--text">Records per page</span> -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              text
              color="primary"
              class="ml-2"
              v-bind="attrs"
              v-on="on"
            >
              {{ itemsPerPage }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(number, index) in itemsPerPageArray"
              :key="index"
              @click="updatePaginator(number), paginate(page, number)"
            >
              <v-list-item-title>{{ number }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>

      <v-pagination
        v-model="page"
        :length="totalPageLength"
        @input="paginate(page)"
        total-visible="7"
      ></v-pagination>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Paginator",
  props: {
    datafeed: [Array, Boolean],
    apisource: [Object, Boolean],
    configfeed: [Object, Boolean],
    callbackPaginator: [Function],
    totalPageLength: [Number],
  },
  data() {
    return {
      page: 1,
      itemsPerPageArray: [10, 25, 50, 100, 500],
      itemsPerPage: 10,
      config: {
        title: "Records per page",
      },
      //totalPageLength: 0
    };
  },
  methods: {
    async paginate(page, number) {
      var pageNumber;
      if (page) {
        pageNumber = page - 1;
      } else {
        pageNumber = 0;
      }
      console.log("page number", pageNumber);
      console.log("page", this.page);

      //console.log(this.itemsPerPage);
      if (number) {
        this.itemsPerPage = number;
      }

      this.callbackPaginator(pageNumber, this.itemsPerPage);
    },
    updatePaginator(number) {
      this.itemsPerPage = number;
      this.page = 1;
    },
  },
};
</script>
