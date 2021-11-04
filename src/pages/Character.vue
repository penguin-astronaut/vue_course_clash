<template>
  <div class="wrapper-person">
    <div class="" v-if="character">
      <img :src="character.img" :alt="character.title">
      <h1 class="title">{{ character.title }}</h1>
      <p>{{ character.descr }}</p>
      <CardStats :stats="character.info"></CardStats>
      <router-link to="/" class="btn btnPrimary">Back to home</router-link>
    </div>
  </div>
</template>

<script>
import CardStats from '../components/UI/CardStats';

import items from '../seeders/items';

export default {
  components: {
    CardStats
  },
  data() {
    return {
      character: null
    }
  },
  created() {
    const alias = this.$route.params.characterName
    const item = items.find(el => el.alias === alias)
    if (!item) {
      return this.$router.push('/not_found')
    }
    this.character = item
  },
  unmounted() {
    console.log('onmounnt')
  }
}
</script>

<style lang="scss" scoped>
.wrapper-person {
  text-align: center;
}
.card-stats {
  margin: 30px 0;
  border-radius: 14px;
}
</style>