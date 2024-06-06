<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container mt-4">
      <h1 class="mb-4">Product List</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">AlbumId</th>
            <th scope="col">Photoid</th>
            <th scope="col">title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="photo in photos" :key="photo.id">
            <td>{{ photo.albumId }}</td>
            <td> {{ photo.id }} </td>
            <td>{{photo.title}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
    import axios from "axios";
    export default {
      name: 'photosList',
      data() {
        return {
          photos: []
        }
      },
      created() {
        this.fetchPhotos();
      },
      methods: {
        async fetchPhotos() {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/photos"
                );
                // console.log(response.data);
                if (response.data) {
                    this.photos = response.data;
                }
            } catch (error) {
                console.error("Error fetching photos:", error);
            }
        },
      }
    }
  
</script>