<script setup>
import HeroComponent from '@/components/HeroComponent.vue'
import TaxComponent from '@/components/TaxComponent.vue'
import GraphComponent from '@/components/GraphComponent.vue'
import BenefitsComponent from '@/components/BenefitsComponent.vue'
import Alters from '@/components/AltersComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useUserStore } from '@/store/store.js'

const userStore = useUserStore()

</script>

<template>
    <HeroComponent :data="userStore?.webData"/>
    <TaxComponent />
    <GraphComponent :chart="userStore?.webData?.linkChart" :buy="userStore?.webData?.linkDexTool ? userStore?.webData?.linkDexTool : userStore?.webData?.pumpFunLink"/>
    <BenefitsComponent />
    <Alters :chart="userStore?.webData?.linkChart" :buy="userStore?.webData?.linkDexTool ? userStore?.webData?.linkDexTool : userStore?.webData?.pumpFunLink"/>
    <FooterComponent :data="userStore?.webData"/>
</template>

<style scoped>

</style>
