<template>
  <div>
    <div id="app">
      <div v-if="!image">
        <h2>Виберіть фото</h2>
        <input type="file" id="addImage" multiple accept="image/*" @change="onFileChange">
      </div>
    </div>
    <div class="gallery">
      <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
        <router-link :to="`/photo/${photo.id}`">
        <img :src="photo.filename">
        <div class="btn"><button @click="removeImage">Видалити фото</button></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export let photos = 
[

];
import { callbackify } from 'util';
export default {
  name: 'Gallery',
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        let ind = 0;
        if (photos.length != 0) {
          ind = photos[photos.length - 1].id + 1;
        }
        photos.push({ id: ind, filename: e.target.result });
        this.uid = ind;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      console.log(this.uid);
      for (let i = 0; i < photos.length; i += 1) {
        if (this.uid == photos[i].id) {
          photos.splice(i, 1);
          break;
        }
      }
    }
  },
};
</script>

<style>
  #button {
    text-align: center;
  }

  #app {
    text-align: center;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
    max-width: 80rem;
    margin: 5rem auto;
    padding: 0 5rem;
  }
  .gallery-panel img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    border-radius: 0.75rem;
  }
</style>