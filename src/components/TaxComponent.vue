<script setup>

const statsItem = [
    {
        title: "1B",
        descr: "Total Supply"
    },
    {
        title: "100%",
        descr: "Liquidy Token Burn"
    },
    {
        title: "Renounced",
        descr: "Ownership has been renounced"
    },
    {
        title: "0%",
        descr: "There is no tax on buy or sell transaction"
    }
]

</script>

<template>
    <section class="tax">
        <div class="container">
            <div class="tax__overlay"></div>
            <div class="tax__container">
                <h2 class="tax__container-title" :class="{'fadeInUp' : true}">No Tax Just Gains!</h2>
                <p class="tax__container-descr" :class="{'fadeInUp' : true}">
                    Peezy is all about the fam. We’re building a squad where everyone’s got a voice and can contribute to the future
                    of Peezy. It’s a place where memes meet money, and everyone’s invited.
                </p>

                <div class="tax__container-stats">
                    <div class="tax__container-stats-item" v-for="(item, idx) in statsItem" :key="idx" :class="{'fadeInUp': true}">
                        <h2 class="tax__container-stats-item-title">{{ item.title }}</h2>
                        <p class="tax__container-stats-item-descr">{{ item.descr }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.tax {
    background: var(--darkGreen);
    padding: 80px 0;
    position: relative;

    @media screen and (max-width: 1130px) {
        padding: 60px 0;
    }

    @media screen and (max-width: 767px) {
        padding: 40px 0;
    }

    &__overlay {
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-image: url("../assets/img/peezy-bg.webp");
        background-position: bottom right;
        background-repeat: no-repeat;
        background-size: 32% auto;
        opacity: 0.89;
    }

    &__container {
        max-width: 1000px;
        margin: 0 auto;

        @media screen and (max-width: 767px) {
            max-width: 100%;
        }

        &-title {
            color: var(--globalColorGreen);
            font-family: "Squada One", sans-serif;
            font-size: 132px;
            font-weight: 600;
            text-shadow: 4px 4px 0px #000000;
            line-height: 1.3em;
            text-align: center;
            margin-bottom: 20px;
            opacity: 0;

            &.fadeInUp {
                animation: fadeInUp 1s forwards;
            }

            @media screen and (max-width: 767px) {
                font-size: 97px;
                line-height: 90px;
            }
        }
        &-descr {
            margin: 0px 0px 0px 1.75em;
            padding: 0% 14% 0% 14%;
            text-align: center;
            color: var(--bgHero);
            font-size: 16px;
            line-height: 26px;
            opacity: 0;
            font-family: "Tauri", sans-serif;

            &.fadeInUp {
                animation: fadeInUp 1s forwards;
            }

            @media screen and (max-width: 767px) {
                padding: 0;
                margin: 0;
            }
        }

        &-stats {
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media screen and (max-width: 1130px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                justify-content: center;
            }

            @media screen and (max-width: 767px) {
                grid-template-columns: 1fr;
            }

            &-item {
                padding: 10px;
                max-width: 250px;
                max-height: 180px;
                position: relative;
                z-index: 99;
                opacity: 0;

                @media screen and (max-width: 767px) {
                    max-width: 100%;
                    max-height: fit-content;
                }

                &.fadeInUp {
                    animation: fadeInUp 1s forwards;
                }

                &-title {
                    text-shadow: 2px 2px 0px #000000;
                    color: var(--bgHero);
                    font-family: "Squada One", sans-serif;
                    font-size: 59px;
                    font-weight: 600;
                    margin-bottom: 10px;
                    line-height: 97px;
                    text-align: center;
                }

                &-descr {
                    color: var(--globalColorText);
                    font-family: "Tauri", sans-serif;
                    font-size: 16px;
                    line-height: 26px;
                    font-weight: 400;
                    text-align: center;
                    max-width: 230px;

                    @media screen and (max-width: 767px) {
                        max-width: 100%;
                    }
                }
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
