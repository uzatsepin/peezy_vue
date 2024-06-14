<script setup>

</script>

<template>
    <div class="Preloader">
        <div class="Preloader__container">
            <div class="spinner"></div>
        </div>
    </div>
</template>

<style>
.Preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    z-index: 999;
    overflow: hidden;
}

.Preloader__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.spinner {
    width: 72px;
    height: 72px;
    display: grid;
    animation: spinner-plncf9 4s infinite;
}

.spinner::before,
.spinner::after {
    content: "";
    grid-area: 1/1;
    border: 12px solid;
    border-radius: 50%;
    border-color: #64b541 #64b541 #0000 #0000;
    mix-blend-mode: darken;
    animation: spinner-plncf9 1s infinite linear;
}

.spinner::after {
    border-color: #0000 #0000 #75cc4f #75cc4f;
    animation-direction: reverse;
}

@keyframes spinner-plncf9 {
    100% {
        transform: rotate(1turn);
    }
}
</style>
