<script setup>
const benefits = [
    {
        title: "Community",
        description: "Peezy is a community driven meme token build on around pepe’s alter ego.",
    },
    {
        title: "Taxless",
        description: "Peezy has zero percent transaction tax. This is a true community token at heart.",
    },
    {
        title: "Safe",
        description: "The liquidty tokens have been burned and the ownership has been renounced to ensure safety!",
    },
    {
        title: "Meme",
        description: "Peezy has a strong foot in the crypto scene being Pepe’s alter urban styled alter ego.",
    }
]
</script>

<template>
    <section class="benefits">
        <div class="container">
            <div class="benefits__container">
                <div class="benefits__container-item" v-for="(item, index) in benefits" :key="index" :class="{'fadeInUp' : true}">
                    <h2 class="benefits__container-item-title">{{ item.title }}</h2>
                    <p class="benefits__container-item-descr">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.benefits {
    background: var(--globalColorText);
    padding: 50px 0;

    &__container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        @media screen and (max-width: 1130px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 767px) {
            grid-template-columns: 1fr;
        }

        &-item {
            padding: 15px;
            opacity: 0;

            &.fadeInUp {
                animation: fadeInUp 1s forwards;
            }

            &-title {
                color: var(--globalColorGreen);
                font-family: "Squada One", sans-serif;
                font-size: 53px;
                font-weight: 600;
                margin-bottom: 10px;
                text-align: left;
            }

            &-descr {
                text-align: left;
                color: var(--bgHero);
                font-family: "Tauri", sans-serif;
                font-size: 16px;
                line-height: 26px;
                font-weight: 400;
            }
        }
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0,100%,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}


</style>
