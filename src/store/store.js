import {defineStore} from 'pinia';
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userId = ref('')
  const isAuth = ref();
  const webData = ref()

  function setUserId(id) {
    userId.value = id;
  }

  function setIsAuth(isAuth) {
    isAuth.value = isAuth
  }

  function setWebData(data) {
    webData.value = data;
  }

  return { userId, setUserId, setIsAuth, isAuth, webData, setWebData }
})
