<template>
  <div class="container mt-4">
    <h1 class="mb-4">Discount List</h1>
    <router-link :to="{ name: 'create-discount' }" class="btn btn-primary mb-3"
      >Create Discount</router-link
    >

    <div v-if="discounts.length === 0" class="alert alert-danger d-flex align-items-center" role="alert">
      <!-- <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg> -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      <div>
        No discounts found.
      </div>
    </div>    

    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Discount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="discount in discounts" :key="discount.id">
            <td>{{ discount.title }}</td>
            <td>{{ discount.discount }}</td>
            <td>
              <router-link
                :to="{ name: 'edit-discount', params: { id: discount.id } }"
                class="btn btn-secondary"
                >Edit</router-link
              >
              <router-link
                :to="{ name: 'show-discount', params: { id: discount.id } }"
                class="btn btn-primary"
                >Show</router-link
              >
              <button
                @click="deleteDiscount(discount.id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  name: "DiscountList",
  data() {
    return {
      discounts: [],
    };
  },
  mounted() {
    this.fetchDiscounts();
  },
  methods: {
    async fetchDiscounts() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/discount/list"
        );
        console.log(response.data);
        if (response.data.success) {
          this.discounts = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching discounts:", error);
      }
    },
    async deleteDiscount(id) {
      if (confirm("Are you sure you want to delete this discount?")) {
        try {
          const response = await axios.delete(
            `http://127.0.0.1:8000/api/discount/delete/${id}`
          );
          if (response.data.success) {
            // Remove the deleted discount from the list
            this.discounts = this.discounts.filter(
              (discount) => discount.id !== id
            );
          }
        } catch (error) {
          console.error("Error deleting discount:", error);
        }
      }
    },
  },
};
</script>
  
  <style>
/* Add your custom styles here */
</style>
  