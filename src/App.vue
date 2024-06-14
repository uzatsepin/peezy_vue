<script setup>
import { onMounted, ref } from 'vue'
import { client } from '@/pocketbase/pocketbase.js'
import { useUserStore } from '@/store/store.js'

const userStore = useUserStore()

const isLoading = ref(false)

onMounted(async () => {
    try {
        isLoading.value = true;
        const data = await client.collection('header').getFullList({
            sort: '-created',
        });

        userStore.setWebData(data[0])

        isLoading.value = false;

    } catch (e) {
        console.log(e)
    }
})

</script>

<template>
    <div class="site-container">
        <div v-if="isLoading" class="loading">
            <img src="../src/assets/img/peezy-logo.webp" alt="">
        </div>
        <div v-else>
            <RouterView />
        </div>
    </div>
</template>

<style scoped lang="scss">

.loading {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bgHero);

    & img {
        width: 20%;
        will-change: transform;
        animation: pulse 1s infinite;
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.0858);
    }
    100% {
        transform: scale(1);
    }
}

</style>
