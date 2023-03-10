<script setup>
import { storeToRefs } from 'pinia';
import { reactive, computed } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { useUserStore } from './stores/user';
const userStore = useUserStore()
const { username, password } = storeToRefs(userStore)
const route = useRoute()
const router = useRouter()

const loginStatus = computed(() => {
  return username && password
})

const toLoginOrLogout = () => {
  if (loginStatus.value) {
    // 退出
  } else {
    router.push('/login')
  }
}
</script>

<template>
  <header v-show="route.name !== 'login'">
    <div>
      <RouterLink to="/goods/drink">饮料</RouterLink>
      <RouterLink to="/goods/fruit">水果</RouterLink>
    </div>
    <div>
      <span>购物车</span>
      <span @click="toLoginOrLogout">{{ loginStatus ? username : '未登录' }}</span>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
