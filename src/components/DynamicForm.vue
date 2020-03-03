<template>
  <div class="container">
    <div class="col-md-6">
      <formio src="" :form="formschema" url="" submission="" options="" v-on:submit="formSubmission"></formio>
    </div>
  </div>
</template>

<script>
import { Form } from 'vue-formio';
import { FormBuilder } from 'vue-formio';
export default {
  name: 'DynamicForm',
  components: { formio: Form, FormBuilder },
  data() {
    return {
      formschema: {}
    }
  },
  created () {
    this.getFormConfig();
  },
  methods: {
    getFormConfig() {
      this.axios.get("https://lvqgnlrsnqtqjhk.form.io/ideaform").then((response) => {
        this.formschema = response.data;
      });
    },
    formSubmission(evt) {
      console.log(evt)
    }
  },
}
</script>
