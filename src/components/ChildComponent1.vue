<template>
  <div class="ma-4">
    <v-row>Hello I am child componet ONE and my parent information is:</v-row>
    <v-row>
      <v-col>name:{{ parentData.name }}</v-col>
      <v-col>age:{{ parentData.age }}</v-col>
      <v-col>Gender:{{ parentData.gender }}</v-col>
    </v-row>
  </div>
</template>

<script>
import { sharedService } from "./../services/childSharedService";
export default {
  name: "Childomp",
  props: ["parentData"],
  data: () => ({}),

  //   passing data from one child component to another child component
  /*
There are several way to pass data from one component to another  component
1.because both child component has same parent so we can pass from one componet to parent and then paren to another child
2.Using a centralized event bus
3.using Router 
4.Using a shared service
5.Using a store

*/

  created() {
    sharedService.updateData("Hello from Child 1!");
  },
};
</script>
