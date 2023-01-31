<template>
  <v-card flat>
    <v-card-text> post List</v-card-text>
    <v-col v-for="(item, i) in posts" :key="i" cols="12">
      <v-card blue>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-h5" v-text="item.title"></v-card-title>

            <v-card-subtitle v-text="item.body"></v-card-subtitle>
          </div>
        </div>
      </v-card>
    </v-col>

    <!-- v-if="Object.keys(allCommissionData.Commission).length != 0" -->
    <Paginator
      :callbackPaginator="postLists"
      :totalPageLength="totalPageLength"
      :configfeed="{
        title: 'posts per page',
      }"
    ></Paginator>
  </v-card>
</template>

<script>
import Paginator from "@/components/Paginator";
import axios from "axios";

export default {
  components: {
    Paginator,
  },
  props: {
    datafeed: [Array, Boolean],
    configfeed: [Object, Boolean],
  },
  name: "ApiList",
  data() {
    return {
      posts: [],
      page: 0,
      totalPageLength: 0,
    };
  },
  methods: {
    async postLists(page, size) {
      if (size) {
        var limit = size;
      } else {
        limit = 10;
      }
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          this.posts = res.data;
          this.totalPageLength = res.data.length / limit;
        });
    },
  },
  async mounted() {
    await this.postLists(this.page);
  },
};
</script>

