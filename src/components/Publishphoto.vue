<template>
  <div class="list-default-img" >
    <span>请选择或者拍照上传照片</span>
    <input type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" style="display: none;">
  </div>
  <ul class="list-ul" >
    <li class="list-li" >
      <a class="list-link" >
        <img>
      </a>
      <span class="list-img-close"></span>
    </li>
    <li class="list-li-add">
      <span class="add-img"></span>
    </li>
  </ul>
</template>
<!--<script>-->
  <!--import lrz from '@/lrz.bundle.js'-->
  <!--export default {-->
    <!--data: function () {-->
      <!--return {-->
        <!--isPhoto: true-->
      <!--}-->
    <!--},-->
    <!--watch: {-->
    <!--},-->
    <!--methods: {-->
    <!--}-->
  <!--}-->
<!--</script>-->
