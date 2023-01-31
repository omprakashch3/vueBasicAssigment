<template>
  <div>
    <h1>Form</h1>
    <v-form @submit.prevent="submitForm">
      <div v-for="(block, index) in blocks" :key="index">
        <label>{{ block.token }}</label>
        <input
          class="ma-4"
          v-model="formData[block.token]"
          :type="block.type"
          :required="block.props.require"
          :placeHolder="block.props.placeHolder"
          @input="validateField(block)"
        />
        <span v-if="errors[block]" class="error">{{ errors[block] }}</span>
      </div>
      <button type="submit">Submit</button>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
      blocks: [
        {
          token: "Person Name",
          type: "text",
          props: {
            title: "enter your name",
            require: true,
            placeHolder: "eg john doe",
          },
        },
        {
          token: "is person minor",
          type: "checkbox",
          props: {
            title: "enter your name",
            require: true,
            placeHolder: "eg john doe",
            default: false,
          },
        },
      ],
      errors: {},
    };
  },
  methods: {
    validateField() {
      // Validate the field and set any errors on the errors object
    },
    submitForm() {
      // Validate the entire form
      // If valid, submit the form
    },
  },
  created() {
    // Fetch the dynamic JSON for the form fields
    // and set it on the formBlocks data property
  },
};
</script>
