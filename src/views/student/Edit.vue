<template>
  <div class="container mt-4">
    <h1 class="mb-4">Edit Student</h1>
    <form @submit.prevent="updateStudent">
      <div class="mb-3">
        <label for="student-name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="student-name"
          v-model="student.name"
        />
      </div>
      <div class="mb-3">
        <label for="student-age" class="form-label">Age</label>
        <input
          type="text"
          class="form-control"
          id="student-age"
          v-model="student.age"
        />
      </div>
      <div class="mb-3">
        <label for="student-province" class="form-label">Province</label>
        <input
          type="text"
          class="form-control"
          id="student-province"
          v-model="student.province"
        />
      </div>
      <div class="mb-3">
        <label for="student-score" class="form-label">Score</label>
        <input
          type="text"
          class="form-control"
          id="student-score"
          v-model="student.score"
        />
      </div>
      <div class="mb-3">
        <label for="student-phone_number" class="form-label">Phone_number</label>
        <input
          type="text"
          class="form-control"
          id="student-phone_number"
          v-model="student.phone_number"
        />
      </div>
      <button type="submit" class="btn btn-primary">Update Product</button>
    </form>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  name: "edit-student",
  props: ["id"],
  data() {
    return {
      student: {
        name: "",
        age: "",
        province: "",
        score: "",
        phone_number: "",
      },
      students: [],
    };
  },
  mounted() {
    this.fetchStudentDetails();
    this.fetchStudent();
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
    async fetchStudent() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/student/list"
        );
        if (response.data.success) {
          this.students = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    },
    async updateStudent() {
      try {
        const response = await axios.put(`http://127.0.0.1:8000/api/student/update/${this.id}`, this.student);
        if (response.data.success) {
          this.$router.push({ name: 'students' });
        }
      } catch (error) {
        console.error('Error updating students:', error);
      }
    },
  },
};
</script>
  