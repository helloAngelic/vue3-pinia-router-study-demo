<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from "../stores/user"
const router = useRouter()
const userStore = useUserStore()
const form = reactive({
  username: '',
  password: ''
})
const isFailure = ref('')

const login = () => {
  if (form.username && form.password) {
    console.log('登录成功');
    userStore.setUserInfo({ username: form.username, password: form.password })
    isFailure.value = 'ok'
    router.push({ name: 'goods', params: { goodsType: 'drink' } })
  } else {
    isFailure.value = 'false'
  }
}
</script>

<template>
  <div class="login">
    <h1>登录</h1>
    <p>
      <label for="username">username: <input type="text" v-model="form.username"></label>
      <span>value:{{ form.username }}</span>
    </p>
    <p>
      <label for="password">username: <input type="password" v-model="form.password"></label>
      <span>value:{{ form.password }}</span>
    </p>
    <p>
      <button @click="(e) => login()">登录</button>
    </p>
    <p v-show="isFailure === 'false'">登录失败,不能为空</p>
  </div>
</template>