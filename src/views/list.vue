<script setup>
import { ref, onMounted } from 'vue';
import { getGoodsListByType } from "../assets/goodsMap"



const goods = ref([])
const goodsType = ref('drink')

onMounted(() => {
  goods.value = getGoodsListByType('drink')
})
</script>

<template>
  <div class="list-style">
    <div v-for="item in goods">
      <span>{{ item.name }}</span>
      <span {{ item.price }}></span>
    </div>
  </div>
</template>