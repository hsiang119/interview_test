<script setup>
    const { title, subtitle } = defineProps({
        title: String,
        subtitle: String
    })
</script>

<template>
    <figure class="relative w-full max-h-[634px]">
        <div class="flex flex-col justify-end items-end absolute bottom-10 right-10 z-10 text-right sm:w-[700px] w-auto h-auto">
            <figcaption class="items-end font-bold text-[48px] text-[#FFFFFF] max-w-[544px] h-[65px] leading-[65px] mobile:mb-[140px] bk2:mb-[70px] bk3:mb-[10px]">{{ title }}</figcaption>
            <figcaption class="text-[18px] text-[#FFFFFF] max-w-[645px] h-[25px] leading-[25px] font-normal">{{ subtitle }}</figcaption>
        </div>
        <img src="../assets/banner.png" alt="白頭翁" class="test block w-full h-[311px] sm:h-full object-cover object-center">
    </figure>
</template>

<style scoped>

</style>