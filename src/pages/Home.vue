<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="item in items" :key="item.id">
      <Card 
      :title="item.title" 
      :name="`${item.lvl} lvl`" 
      :img="item.img"
      :link="`/${item.alias}`">
        <template v-slot:body>
          {{item.descr}}
        </template>
        <template v-slot:footer>
          <CardStats :stats="item.info" />
        </template>
      </Card>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import Card from '../components/UI/Card'
import CardStats from '../components/UI/CardStats'
import items from '../seeders/items'

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
  components: {
    Card,
    CardStats,
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      items,
      settings: {
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        1000: {
          itemsToShow: 3,
        },
        700: {
          itemsToShow: 2,
        },
        300: {
          itemsToShow: 1,
        },
      },
    }
  }
}
</script>