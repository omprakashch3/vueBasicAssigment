import Vue from "vue";

export const sharedService = new Vue({
  data: {
    sharedData: "",
  },
  methods: {
    updateData(data) {
      this.sharedData = data;
    },
  },
});
