<template>
  <v-container>
    <v-card-subtitle
      >Click below btn to get data from child component
    </v-card-subtitle>
    <v-btn class="elevation-2 color=success mt-4" @click="emitEvent">
      ChildData</v-btn
    >
  </v-container>
</template>

<script>
import { sharedService } from "./../services/childSharedService";

export default {
  methods: {
    emitEvent() {
      this.$emit("childEvent", { message: "Hello from the child!" });
    },
  },

  created() {
    console.log(sharedService.sharedData); // "Hello from Child 1!"
  },
};
</script>