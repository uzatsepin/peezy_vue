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
    <section class="alters">
        <div class="container">
            <div class="alters__container">
                <div class="alters__container-img">
                    <img src="../assets/img/comics-img.webp" alt="Comics" />
                </div>
                <div class="alters__container-text">
                    <h2 class="alters__container-text-title">Urban Alters</h2>
                    <p class="alters__container-text-descr">
                        Peezy aka Young Peezy is featured in Matt Furie’s Boy’s Club comic series. They are the urban, rap inspired
                        alter ego’s of the well known PEPE character.
                    </p>
                    <p class="alters__container-text-descr last">
                        Them being part of the bigger narrative adds further upon the meme value of Peezy!
                    </p>

                    <div class="alters__container-text-buttons">
                        <a :href="chart" class="alters__container-text-buttons-item button"> Chart </a>
                        <a :href="buy" class="alters__container-text-buttons-item button"> Buy </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.alters {
    padding: 120px 0;
    background: var(--darkGreen);

    @media screen and (max-width: 1130px) {
        padding: 60px 0;
    }

    @media screen and (max-width: 767px) {
        padding: 40px 0;
    }

    &__container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;

        @media screen and (max-width: 767px) {
            grid-template-columns: 1fr;
        }

        &-img {
            & img {
                width: 68%;
                display: block;
                margin: 0 auto;

                @media screen and (max-width: 1130px) {
                    width: 60%;
                }
            }
        }

        &-text {
            padding: 30px;

            @media screen and (max-width: 767px) {
                padding: 0;
            }

            &-title {
                color: var(--globalColorGreen);
                font-family: "Squada One", sans-serif;
                font-size: 90px;
                font-weight: 600;
                line-height: 117px;
                text-align: center;
                text-shadow: 4px 4px 0px #000000;
                margin-bottom: 20px;

                @media screen and (max-width: 767px) {
                    font-size: 54px;
                }
            }

            &-descr {
                text-align: center;
                color: var(--bgHero);
                font-size: 16px;
                line-height: 26.4px;
                font-family: "Tauri", sans-serif;
                margin-bottom: 20px;

                &.last {
                    margin-bottom: 48px;

                    @media screen and (max-width: 767px) {
                        margin-bottom: 24px;
                    }
                }
            }

            &-buttons {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
        }
    }
}


</style>
