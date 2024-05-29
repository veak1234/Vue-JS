<template>
  <div class="container mt-4">
    <h1 class="mb-4">Category List</h1>
    <router-link to="/categories/create" class="btn btn-primary mb-4"
      >New Category</router-link
    >
      <div v-if="categories.length === 0" class="alert alert-danger d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
          No categories found.
        </div>
      </div> 
    <ul class="list-group mt-4" v-else>
      <li
        v-for="category in categories"
        :key="category.id"
        class="list-group-item"
      >
        <h4>{{ category.name }}</h4>
        <p>{{ category.description }}</p>
        <router-link
          :to="{ name: 'show-category', params: { id: category.id } }"
          class="btn btn-info btn-sm"
          >Show</router-link
        >
        <router-link
          :to="{ name: 'edit-category', params: { id: category.id } }"
          class="btn btn-secondary btn-sm"
          >Edit</router-link
        >
        <button
          class="btn btn-danger btn-sm"
          @click="deleteCategory(category.id)"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  name: "list-category",
  data() {
    return {
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
          "http://127.0.0.1:8000/api/category/list"
        );
        console.log(response);
        if (response.data.success) {
          this.categories = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async deleteCategory(categoryId) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/category/delete/${categoryId}`
        );
        if (response.data.success) {
          this.fetchCategories();
        }
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    },
  },
};
</script>
  