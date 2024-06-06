<template>
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"><strong>Name:{{ user.name }}</strong> </p>
        <p class="card-text"><strong>Email:{{ user.email }}</strong> </p>
        <p class="card-text"><strong>Age: {{ user.age }}</strong> </p>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'UserCard',
    props:['user']
  };
  </script>
  
  <style>
  .card {
    margin-top: 1rem;
  }
  </style>