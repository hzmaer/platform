<template>
  <div class="main">
    <section class="camera"  @click="choosePic"  v-if="flag">
    </section>
    <photoList v-else :lists="lists" v-on:choos="chooseItem"></photoList>
    <input type="file"  class="none" id="camera" accept="image/*" @change="toggleList" multiple>
  </div>
</template>
<script>
  import photoList from './pubPhotoList.vue'
  export default {
    data () {
      return {
        flag: true,
        lists: []
      }
    },
    methods: {
      choosePic () {
        const cameraInput = document.getElementById('camera')
        cameraInput.click()
      },
      toggleList (e) {
        this.flag = false
        let lists = e.target.files
        let fileReader = []
        for (var i = 0; i < lists.length; i++) {
          fileReader[i] = new FileReader()
          fileReader[i].onload = (event) => {
            this.lists.push(event.target.result)
          }
          fileReader[i].readAsDataURL(lists[i])
        }
      },
      chooseItem () {
        this.choosePic()
      }
    },
    components: {
      photoList
    }
  }
</script>
<style lang="scss" scoped>
  .none{
    display: none;
  }
  .main{
    display: flex;
    justify-content: center;
  }
  .camera{
    flex: 1;
    height: 200px;
    margin-top: 20px;
    background: url('../assets/camera.svg') no-repeat center top;
    background-size: contain;
  }
</style>
