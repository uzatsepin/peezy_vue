<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

const copyText = ref(props?.data?.address)
const originalText = props?.data?.address
const icon = ref('fa6-solid:copy')
const originalIcon = 'fa6-solid:copy'
const copiedIcon = 'fa6-solid:check'

const copyCode = () => {
    navigator.clipboard.writeText(copyText.value).then(() => {
        copyText.value = 'Copied'
        icon.value = copiedIcon
        setTimeout(() => {
            copyText.value = originalText
            icon.value = originalIcon
        }, 3000)
    }).catch(err => {
        console.error('Failed to copy: ', err)
    })
}
</script>

<template>
    <section class="hero">
        <div class="container">
            <div class="hero__wrapper">
                <div class="hero__wrapper-left">
                    <h1 class="hero__wrapper-title">Peezy</h1>
                    <div class="hero__wrapper-code" @click="copyCode">
                                <span class="hero__wrapper-code-item">
                                    <Icon :icon="icon" />
                                    <span>{{ copyText }}</span>
                                </span>
                    </div>
                    <div class="hero__wrapper-socials">
                        <div class="hero__wrapper-socials-item">
                            <a :href="props?.data?.linkDexTool ? props?.data?.linkDexTool : props?.data?.pumpFunLink" class="hero__wrapper-socials-item-link">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    height="2500"
                                    viewBox="0 -.058 754.779 867.058"
                                    width="2174"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        d="m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.481-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.482l57.213-25.482v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.148 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-48.03 23.278-26.419 11.905-93.194 42.061-148.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.048-5.066 74.201l-.766 71.744 48.08 24.498 48.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.948-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-48.765-25.03c-26.822-13.765-49.748-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-48.567-23.857-94.487-48.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.484-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.548 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 48.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z"
                                        fill="#05a3c9"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div class="hero__wrapper-socials-item">
                            <a :href="props?.data?.linkTg" class="hero__wrapper-socials-item-link telegram">
                                <svg
                                    class="e-font-icon-svg e-fab-telegram"
                                    viewBox="0 0 496 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div class="hero__wrapper-socials-item">
                            <a :href="props?.data?.linkX" class="hero__wrapper-socials-item-link twitter">
                                <svg
                                    class="e-font-icon-svg e-fab-x-twitter"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <p class="hero__wrapper-descr">
                        Born from the iconic “Boys Club” comic series by Matt Furie, Peezy represents the best parts of
                        internet
                        culture. He’s here to remind us to enjoy life, be ourselves, and spread joy.
                    </p>

                    <div class="hero__wrapper-buttons">
                        <a :href="props?.data?.linkX" class="hero__wrapper-buttons-item button">Twitter</a>
                        <a :href="props?.data?.linkTg" class="hero__wrapper-buttons-item button">Telegram</a>
                        <a :href="props?.data?.linkChart" class="hero__wrapper-buttons-item button">Chart</a>
                    </div>
                </div>
                <div class="hero__wrapper-right">
                    <img class="hero__wrapper-right-img" src="../assets/img/peezy-logo.webp" alt="Peezy" height="793"
                         width="816" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

.hero {
    padding: 80px 0;
    background-color: var(--bgHero);

    @media screen and (max-width: 1130px) {
        padding: 60px 0;
    }

    @media screen and (max-width: 767px) {
        padding: 40px 0;
    }

    &__wrapper {
        display: flex;
        align-items: center;

        @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
        }

        &-title {
            font-family: "Squada One", sans-serif;
            font-size: 182px;
            font-weight: 600;
            text-shadow: rgb(0, 0, 0) 4px 4px 0px;
            line-height: 1.4em;
            color: var(--globalColorGreen);
            margin-bottom: 20px;
            text-align: center;

            @media screen and (max-width: 767px) {
                font-size: 119px;
            }
        }

        &-left {
            min-width: 570px;

            @media screen and (max-width: 768px) {
                min-width: 100%;
                width: 100%;
            }
        }

        &-code {
            background: #346b2b;
            border-radius: 0px;
            padding: 10px;
            min-width: 100px;
            color: #FFF;
            width: fit-content;
            margin: 0 auto 20px;

            @media screen and (max-width: 768px) {
                padding: 15px;
                font-size: 18px;
            }

            @media screen and (max-width: 767px) {
                word-break: break-all;
                overflow-wrap: break-word;
            }

            &-item {
                text-align: center;
                display: flex;
                align-items: center;
                gap: 6px;
                width: 100%;
                font-size: 18px;
                font-family: "Tauri", sans-serif;

                & span {
                    display: block;
                }
            }

            &.active {
                background: var(--globalColorGreen)
            }
        }

        &-socials {
            display: flex;
            gap: 5px;
            margin-bottom: 20px;
            align-items: center;
            justify-content: center;

            &-item {
                width: 50px;
                background: #FFF;
                height: 50px;
                border: 1px groove var(--globalColorText);
                border-radius: 10%;

                &:hover {
                    animation-name: animation-pop;
                    animation-duration: .3s;
                    animation-timing-function: linear;
                    animation-iteration-count: 1;
                }

                &-link {
                    font-size: 25px;
                    display: flex;
                    width: 100%;
                    height: 100%;
                    align-items: center;
                    justify-content: center;

                    &:hover {
                        cursor: pointer;
                    }

                    &.telegram {
                        background-color: #2ca5e0;

                        & svg {
                            fill: #FFF;
                        }
                    }

                    &.twitter {
                        background: #000;

                        & svg {
                            fill: #FFF;
                        }
                    }

                    & svg {
                        width: 1em;
                        height: 1em;
                        position: relative;
                        display: block;
                    }
                }
            }
        }

        &-descr {
            margin-bottom: 48px;
            text-align: center;
            max-width: 570px;
            font-size: 16px;
            line-height: 26px;
            color: var(--globalColorText);
            font-family: "Tauri", sans-serif;

            @media screen and (max-width: 768px) {
                max-width: 100%;
                width: 100%;
            }

            @media screen and (max-width: 767px) {
                margin-bottom: 24px;
            }
        }

        &-buttons {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: center;

            &-item {
                display: block;
                background-color: var(--globalColorGreen);
                font-size: 16px;
                line-height: 26px;
                padding: 12px 24px;
                border-radius: 3px;
                color: #fff;
                text-align: center;
                transition: all .3s ease-in-out;

                &:hover {
                    background-color: var(--globalColorGreenHover);
                }
            }
        }

        &-right {
            &-img {
                height: auto;
                max-width: 100%;
                border: none;
                border-radius: 0;
                box-shadow: none;
                will-change: transform;
                animation: pulse 5s infinite;

                @media screen and (max-width: 768px) {
                    max-width: 50%;
                    display: block;
                    margin: 0 auto;
                }

                @media screen and (max-width: 767px) {
                    max-width: 80%;
                }
            }
        }

    }
}

@keyframes animation-pop {
    50% {
        transform: scale(1.2)
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
