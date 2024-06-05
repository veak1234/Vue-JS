
<template>
  <div class="container mt-4">
    <h1 class="mb-4">Student List</h1>
    <router-link to="/students/create" class="btn btn-primary mb-4">
      Student Create</router-link
    >
    <div
      v-if="student.length === 0"
      class="alert alert-danger d-flex align-items-center"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
        viewBox="0 0 16 16"
        role="img"
        aria-label="Warning:"
      >
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      <div>No student found.</div>
    </div>

    <table class="table table-bordered" v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>province</th>
          <th>score</th>
          <th>phone_number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in student" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.province }}</td>
          <td>{{ student.score }}</td>
          <td>{{ student.phone_number }}</td>
          <td>
            <router-link
              :to="{ name: 'show-student', params: { id: student.id } }"
              class="btn btn-info btn-sm"
              >Show</router-link
            >
            <router-link
              :to="{ name: 'edit-student', params: { id: student.id } }"
              class="btn btn-secondary btn-sm"
              >Edit</router-link
            >
            <button
              @click="deleteStudent(student.id)"
              class="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    {{counter}}
  </div>
</template>
  
  <script>
import axios from "axios";
// import { useCounterStore } from "@/store/index";

export default {
  name: "list-student",
  data() {
    return {
      student: [],
      // counter: useCounterStore(),
    };
  },
  mounted() {
    this.fetchStudent();
  },
  methods: {
    async fetchStudent() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/student/list"
        );
        console.log(response);
        if (response.data.success) {
          this.student = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async deleteStudent(studentId) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/student/delete/${studentId}`
        );
        if (response.data.success) {
          this.fetchStudent();
        }
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    },
  },
};
</script>
  