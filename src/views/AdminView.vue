<script setup>
import { useUserStore } from '@/store/store.js'
import { computed, ref } from 'vue'
import { client } from '@/pocketbase/pocketbase.js'
import { Icon } from '@iconify/vue'

import {useRouter} from 'vue-router'

const userStore = useUserStore();

const dbData = computed(() => userStore.webData)

const router = useRouter()

const recordId = 'y5ap926ebnj97ct'

const address = ref('')
const linkDexTool = ref('')
const linkTg = ref('')
const linkX = ref('')
const linkChart = ref('')
const linkBuy = ref('')
const footerMail = ref('')
const pumpFunLink = ref('')

const isLoading = ref(Array(8).fill(false))
const status = ref(Array(8).fill(''))

const changeData = async (index, field, data) => {
    try {
        isLoading.value[index] = true;
        await client.collection('header').update(recordId, {
            [field]: data
        });
        isLoading.value[index] = false;
        status.value[index] = '✅ Done'
    } catch (e) {
        isLoading.value[index] = false;
        console.log(e);
        status.value[index] = 'Error'
    }
}

const logOut = () => {
    client.authStore.clear();
    router.push('/')
}

</script>

<template>
    <div class="admin">
        <div class="container">
            <div class="admin__container">
                <div class="admin__container-logout">
                    <Icon icon="material-symbols:logout" @click="logOut" width="18px" height="18px"/>
                </div>
                <a href="/"><img src="../assets/img/logo.webp" alt="" class="admin__img"></a>
                <div class="admin__container-info">
                    <label for="address" class="admin__container-info-label">Address</label>
                    <input id="address" type="text" :placeholder="dbData?.address" class="admin__container-info-item login" v-model="address">
                    <div class="admin__container-info-btn button" @click="changeData(0, 'address', address)">
                        <span v-if="!isLoading[0]">{{ status[0] ? status[0] : 'Change' }}</span>
                        <Icon v-else icon="line-md:loading-twotone-loop"/>
                    </div>
                </div>
                <div class="admin__container-info">
                    <label for="linkDexTool" class="admin__container-info-label">Link DexTool</label>
                    <input id="linkDexTool" type="text" :placeholder="dbData?.linkDexTool" class="admin__container-info-item login" v-model="linkDexTool">
                    <div class="admin__container-info-btn button" @click="changeData(1, 'linkDexTool', linkDexTool)">
                        <span v-if="!isLoading[1]">{{ status[1] ? status[1] : 'Change' }}</span>
                        <Icon v-else icon="line-md:loading-twotone-loop"/>
                    </div>
                </div>
                <div class="admin__container-info">
                    <label for="linkTg" class="admin__container-info-label">Link TG</label>
                    <input id="linkTg" type="text" :placeholder="dbData?.linkTg" class="admin__container-info-item login" v-model="linkTg">
                    <div class="admin__container-info-btn button" @click="changeData(2, 'linkTg', linkTg)">
                        <span v-if="!isLoading[2]">{{ status[2] ? status[2] : 'Change' }}</span>
                        <Icon v-else icon="line-md:loading-twotone-loop"/>
                    </div>
                </div>
                <div class="admin__container-info">
                    <label for="linkX" class="admin__container-info-label">Link X</label>
                    <input id="linkX" type="text" :placeholder="dbData?.linkX" class="admin__container-info-item login" v-model="linkX">
                    <div class="admin__container-info-btn button" @click="changeData(3, 'linkX', linkX)">
                        <span v-if="!isLoading[3]">{{ status[3] ? status[3] : 'Change' }}</span>
                        <Icon v-else icon="line-md:loading-twotone-loop"/>
                    </div>
                </div>
                <div class="admin__container-info">
                    <label for="linkChart" class="admin__container-info-label">Link Chart</label>
                    <input id="linkChart" type="text" :placeholder="dbData?.linkChart" class="admin__container-info-item login" v-model="linkChart">
                    <div class="admin__container-info-btn button" @click="changeData(4, 'linkChart', linkChart)">
                        <span v-if="!isLoading[4]">{{ status[4] ? status[4] : 'Change' }}</span>
                        <Icon v-else icon="line-md:loading-twotone-loop"/>
                    </div>
                </div>
                <div class="admin__container-info">
                    <label for="linkBuy" class="admin__container-info-label">Link Buy</label>
                    <input id="linkBuy" type="text" :placeholder="dbData?.linkBuy" class="admin__container-info-item login" v-model="linkBuy">
                    <div class="admin__container-info-btn button" @click="changeData(5, 'linkBuy', linkBuy)">
                        <span v-if="!isLoading[5]">{{ status[5] ? status[5] : 'Change' }}</span>
                        <Icon v-else icon="line-md:loading-twotone-loop"/>
                    </div>
                </div>
                <div class="admin__container-info">
                    <label for="footerMail" class="admin__container-info-label">Footer Mail</label>
                    <input id="footerMail" type="text" :placeholder="dbData?.footerMail" class="admin__container-info-item login" v-model="footerMail">
                    <div class="admin__container-info-btn button" @click="changeData(6, 'footerMail', footerMail)">
                        <span v-if="!isLoading[6]">{{ status[6] ? status[6] : 'Change' }}</span>
                        <Icon v-else icon="line-md:loading-twotone-loop"/>
                    </div>
                </div>
                <div class="admin__container-info">
                    <label for="pumpFunLink" class="admin__container-info-label">Pump Fun Link</label>
                    <input id="pumpFunLink" type="text" :placeholder="dbData?.pumpFunLink" class="admin__container-info-item login" v-model="pumpFunLink">
                    <div class="admin__container-info-btn button" @click="changeData(7, 'pumpFunLink', pumpFunLink)">
                        <span v-if="!isLoading[7]">{{ status[7] ? status[7] : 'Change' }}</span>
                        <Icon v-else icon="line-md:loading-twotone-loop"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.admin {
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
        max-width: 500px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        background: var(--light-color);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        border-radius: 8px;
        position: relative;

        &-logout {
            position: absolute;
            top: 16px;
            right: 16px;
            transition: all 250ms ease-in-out;

            &:hover {
                cursor: pointer;
                color: #FF5B61;
            }
        }

        &-info {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;

            &-label {
                font-size: 14px;
                color: #6b6b6b;
                display: block;
                min-width: 52px;
            }

            &-item {
                display: block;
                padding: 8px;
                outline: none;
                border: 1px solid var(--globalColorGreen);
                border-radius: 8px;
                color: var(--globalColorText);
                width: 100%;
            }

            &-btn {
                min-width: 88px;
            }

            ::v-deep(.button) {
                padding: 8px 12px;
                font-size: 14px;
            }
        }
    }
}
</style>
