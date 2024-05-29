
<template>
  <div class="container mt-4">
    <h1 class="mb-4">student Details</h1>
    <div v-if="student" class="card">
      <div class="card-body">
        <h5 class="card-title">Name: {{ student.name }}</h5>
        <p class="card-text">Age: {{ student.age }}</p>
        <p class="card-text">province: {{ student.province }}</p>
        <p class="card-text">score: {{ student.score }}</p>
        <p class="card-text">Phone number: {{ student.phone_number}}</p>
        <router-link
          :to="{ name: 'edit-student', params: { id: student.id } }"
          class="btn btn-secondary"
          >Edit</router-link
        >
        <router-link to="/students" class="btn btn-primary"
          >Back to Products</router-link
        >
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  name: "show-student",
  props: ["id"],
  data() {
    return {
      student: null,
    };
  },
  mounted() {
    this.fetchStudentDetails();
  },
  methods: {
    async fetchStudentDetails() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/student/show/${this.id}`
        );
        if (response.data.success) {
          this.student = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    },
  },
};
</script>
  