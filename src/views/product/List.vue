<template>
    <div class="container mt-4">
      <h1 class="mb-4">Product List</h1>
      <router-link to="/products/create" class="btn btn-primary mb-4">Create New Product</router-link>
      <div v-if="products.length === 0" class="alert alert-danger d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <div>
          No product found.
        </div>
      </div> 
      <!-- <div v-if="products"></div> -->
      <table class="table table-bordered" v-else>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.created_at }}</td>
            <td>
              <router-link :to="{ name: 'show-product', params: { id: product.id } }" class="btn btn-info btn-sm">Show</router-link>
              <router-link :to="{ name: 'edit-product', params: { id: product.id } }" class="btn btn-secondary btn-sm">Edit</router-link>
              <button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name:'list-product',
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/product/list');
          if (response.data.success) {
            this.products = response.data.data;
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      },
      async deleteProduct(productId) {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/product/delete/${productId}`);
          if (response.data.success) {
            this.fetchProducts();
          }
        } catch (error) {
          console.error('Error deleting product:', error);
        }
      },
    },
  };
  </script>
  