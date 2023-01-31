<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Hello Welcome to Home Page
        </h1>

        <p class="subheading font-weight-regular">
          For More Information About me
          <br />please go through my linkdin
          <a target="_blank">https://www.linkedin.com/in/omprakash-chautala/</a>
        </p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div>
      <ChildComponent v-bind:parentData="parentInfo" />
    </div>
    <v-divider></v-divider>
    <div>
      <ChildComponentTWO v-on:childEvent="handleEvent" />
    </div>
  </v-container>
</template>

<script>
import ChildComponent from "./ChildComponent1.vue";
import ChildComponentTWO from "./ChildComponent2.vue";
export default {
  name: "HelloWorld",
  components: {
    ChildComponent,
    ChildComponentTWO,
  },

  data: () => ({
    parentInfo: {
      name: "MSD",
      age: "38",
      gender: "male",
    },
  }),
  methods: {
    handleEvent(payload) {
      console.log("Event received from child:", payload);
      alert(payload.message);
    },
  },
};
</script>
