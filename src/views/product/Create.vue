<template>
  <div class="container mt-4">
    <h1 class="mb-4">Create Product</h1>
    <Form @submit="createProduct" v-slot="{ errors }">
      <div class="mb-3">
        <label for="product-name" class="form-label">Name</label>
        <Field
          name="name"
          id="product-name"
          class="form-control"
          v-model="product.name"
          rules="required|minLength:5"
          validateOnInput
          :style="{ borderColor: errors && errors['name'] ? 'red' : '' }"
        />
        <ErrorMessage name="name" class="text-danger" />
      </div>
      <div class="mb-3">
        <label for="product-product" class="form-label">product</label>
        <select
          class="form-control"
          id="product-product"
          v-model="product.product_id"
          required
        >
          <option
            v-for="product in categories"
            :key="product.id"
            :value="product.id"
          >
            {{ product.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="product-description" class="form-label">Description</label>
        <Field
          name="description"
          id="product-description"
          class="form-control"
          v-model="product.description"
          rules="required|minLength:15"
          validateOnInput
          :style="{ borderColor: errors && errors['description'] ? 'red' : '' }"
        />
        <ErrorMessage name="description" class="text-danger" />
      </div>
      <button type="submit" class="btn btn-primary">Create Product</button>
    </Form>
  </div>
</template>
  
<script>
import { Form, Field, defineRule, ErrorMessage } from "vee-validate";
import axios from "axios";

defineRule("required", (value) => {
  if (!value || !value.length) {
    return " ";
  }
  return true;
});
defineRule("minLength", (value, [limit]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true;
  }
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`;
  }
  return true;
});

export default {
  name: "create-product",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      product: {
        name: "",
        product_id: "",
        description: "",
      },
      categories: [],
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/product/list"
        );
        if (response.data.success) {
          this.categories = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async createProduct() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/product/create",
          this.product
        );
        if (response.data.success) {
          this.$router.push({ name: "products" });
        }
      } catch (error) {
        console.error("Error creating product:", error);
      }
    },
  },
};
</script>
  