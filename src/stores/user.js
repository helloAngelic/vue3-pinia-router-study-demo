import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
  const username = ref('')
  const password = ref('')
  const isLogin = ref(false)

  function setUserInfo({ username, password }) {
    this.username = username
    this.password = password
    this.isLogin = true
  }

  function removeUserInfo() {
    this.username = ''
    this.password = ''
    this.isLogin = false
  }

  return { isLogin, username, password, setUserInfo, removeUserInfo }
})