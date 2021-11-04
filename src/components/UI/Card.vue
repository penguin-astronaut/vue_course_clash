<template>
  <div class="card">
    <div class="card-img__wrapper">
      <img :src="img" :alt="title" class="card-img">
    </div>
    <div class="card-name">{{name}}</div>
    <div class="card-title">{{title}}</div>
    <div class="card-body">
      <slot name="body"></slot>
      <router-link v-if="link" class="card-link" :to="link">View more</router-link>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    img: {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-link {
    display: block;
    margin-top: 4px;
    text-align: center;
  }
</style>