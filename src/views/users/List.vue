<template>
  <div class="container mt-4">
    <h1 class="mb-4">User List</h1>
    <UserTable :users="users" @detail="detail" />
    <UserCard :user="selectUser" />
  </div>
</template>
  
<script>
import UserTable from '@/views/users/Table.vue';
import UserCard from '@/views/users/Card.vue';

export default {
  name: "UserList",
  components: {
    UserTable,
    UserCard,
  },
  data() {
    return {
      users: [
        { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
        { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
        { id: 3, name: "Charlie", email: "charlie@example.com", age: 35 },
      ],
      selectUser:''
    };
  },
  methods: {
    detail(data) {
      this.selectUser = data;
    },
  },
};
</script>
  
  <style>
.container {
  max-width: 600px;
  margin: auto;
}
</style>