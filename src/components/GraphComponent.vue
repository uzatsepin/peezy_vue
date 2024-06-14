<script setup>

defineProps({
    chart: {
        type: String,
        required: true,
    },
    buy: {
        type: String,
        required: true,
    }
})

</script>

<template>
    <section class="graph">
        <div class="container">
            <div class="graph__overlay"></div>
            <div class="graph__container">
                <div class="graph__container-text">
                    <h2 class="graph__container-text-title" :class="{'fadeInRight' : true}">PEPE's Alter Ego</h2>
                    <p class="graph__container-text-descr">
                        Peezy is all about that good vibe. It’s about living the internet culture, building a strong fam, and build
                        a wave of to the top. Join us and make Peezy stand out!
                    </p>

                    <div class="graph__container-buttons">
                        <a :href="chart" class="graph__container-buttons-item button"> Chart </a>
                        <a :href="buy" class="graph__container-buttons-item button"> Buy </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.graph {
    padding: 120px 0;
    position: relative;
    background-color: var(--bgHero);
    z-index: 1;

    @media screen and (max-width: 1130px) {
        padding: 60px 0;
    }

    @media screen and (max-width: 767px) {
        padding: 40px 0;
    }

    &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url("../assets/img/graph-bg.webp");
        background-color: var(--bgHero);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 0.07;
        background-attachment: fixed;
        z-index: -1;

    }

    &__container {

        &-text {
            width: 100%;

            @media screen and (max-width: 1130px) {
                width: 100%;
            }

            &-title {
                color: var(--globalColorGreen);
                font-family: "Squada One", sans-serif;
                font-size: 82px;
                font-weight: 600;
                text-shadow: 4px 4px 0px #000000;
                text-align: center;
                margin-bottom: 20px;
                opacity: 0;

                &.fadeInRight {
                    animation: fadeInRight 1s forwards;
                }
            }

            &-descr {
                text-align: center;
                font-family: "Tauri", sans-serif;
                font-size: 16px;
                line-height: 26px;
                color: var(--globalColorText);
                max-width: 500px;
                margin: 0 auto 48px;
            }
        }

        &-buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            &-item {
                color: #FFF;
                background: var(--globalColorGreen);
                font-family: "Tauri", sans-serif;
                font-size: 16px;
                line-height: 26px;
                padding: 12px 24px;
                border-radius: 3px;
                text-align: center;
            }
        }
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translate3d(100%,0,0)
    }

    to {
        opacity: 1;
        transform: none
    }
}


</style>
