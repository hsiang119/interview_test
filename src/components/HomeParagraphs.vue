<script setup>
    const { infoItem } = defineProps({
        infoItem: Array
    })
</script>

<template>
    <article class="w-full h-full flex sm:flex-row flex-col items-center sm:justify-between px-[50.74px] pt-[50px] bg-[#DCCCBC]">
        <ul v-for="item in infoItem" :key="item.id" class="flex sm:my-0 sm:mx-auto sm:justify-between  sm:mb-0 flex-col w-[278.51px] mb-[50px]">
            <li class="flex w-full relative">
                <div class="absolute top-16 left-8 w-[25px] h-[25px] rounded-[50%] z-20 border-[#AA666699] border-[8px]"></div>
                <p class="title w-[36px] h-[80px] font-bold text-[36px] left-[5px] mr-[40px] ">{{ item.title }}</p>
                <p class="min-w-[200px] h-auto sm:h-[176px] text-[16px] font-normal leading-[21.79px]">{{ item.info }}</p>
            </li>
        </ul>
    </article>
</template>

<style scoped>
    .title{
        writing-mode: vertical-lr;
    }
</style>