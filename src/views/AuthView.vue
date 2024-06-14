<script setup>
import { onMounted, ref } from 'vue'
import { client } from '@/pocketbase/pocketbase.js'
import Preloader from '@/components/Preloader.vue'
import { useUserStore } from '@/store/store.js'
import {useRouter} from 'vue-router'

const authForm = ref({
    login: '',
    password: ''
})
const isLoading = ref(false)
const userStore = useUserStore();

const router = useRouter()

onMounted( () => {
    userStore.isAuth = client.authStore.isValid;

    if (userStore.isAuth) {
        router.push('admin')
    }
})


const auth = async () => {
    try {
        isLoading.value = true
        const authData = await client.collection('users').authWithPassword(
            authForm.value.login,
            authForm.value.password,
        );

        if (authData.record) {
            userStore.setUserId(authData.record.id)
            window.location.reload()
        }

        isLoading.value = false;
    } catch (e) {
        isLoading.value = false;
        console.log(e)
        alert('Неправильный логин или пароль')
    }
}
</script>

<template>
    <div class="auth">
        <div class="container">
            <div class="auth__container">
                <Preloader  v-if="isLoading" />
                <img src="../assets/img/logo.webp" alt="" class="auth__img">
                <div class="auth__container-info">
                    <input type="text" placeholder="Login" class="auth__container-info-item login" v-model="authForm.login">
                    <input type="password" placeholder="******" class="auth__container-info-item password" v-model="authForm.password">
                </div>
                <div class="auth__container-info-btn button" @click="auth">Авторизация</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.auth {
    background: var(--bgHero);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Tauri", sans-serif;

    &__img {
        max-width: 30%;
        display: block;
        margin: 0 auto;
    }

    &__container {
        max-width: 300px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        background: var(--light-color);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        border-radius: 8px;

        &-info {
            display: flex;
            flex-direction: column;
            gap: 16px;

            &-item {
                display: block;
                padding: 8px;
                outline: none;
                border: 1px solid var(--globalColorGreen);
                border-radius: 8px;
                color: var(--globalColorText)
            }

            &-btn {
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
}

</style>
