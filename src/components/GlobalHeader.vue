<script setup>
    const { title, menuItem, activeTab, burgerActive } = defineProps({
        title: String,
        menuItem: Array,
        activeTab: Number,
        burgerActive: Boolean
    })

    const emit = defineEmits(["handleActive", "handleBurgerMenu"])

    const handleActive = (val) => {
        emit("handleActive", val)
    }

    const handleBurgerMenu = () => {
        console.log("fnsk");
        emit("handleBurgerMenu")
    }
</script>

<template>

    <header class="w-full sm:h-[100svh] py-[78px] header-shadow h-[87.74px] relative">
        <nav class="w-full h-full flex flex-row justify-between items-center sm:flex-col ">

            <div class="sm:hidden w-[24px] h-[18px] ml-[26.38px]" @click="handleBurgerMenu">
                <svg v-if="!burgerActive" xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                    <line x1="0.379578" y1="2.8696" x2="24.3796" y2="2.8696" stroke="black" stroke-width="4"/>
                    <line x1="0.379578" y1="20.8696" x2="24.3796" y2="20.8696" stroke="black" stroke-width="4"/>
                    <line x1="0.379578" y1="11.8696" x2="15.6523" y2="11.8696" stroke="black" stroke-width="4"/>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
                    <line y1="-2" x2="28.6924" y2="-2" transform="matrix(0.730323 0.683102 -0.702025 0.712152 0.379639 2.8696)" stroke="black" stroke-width="4"/>
                    <line y1="-2" x2="28.0896" y2="-2" transform="matrix(0.716329 -0.697763 0.716329 0.697763 3.2583 22.4695)" stroke="black" stroke-width="4"/>
                </svg>
            </div>

            <h1 class="justify-center w-[auto] h-[27px] sm:h-[41px] leading-[27px] sm:leading-[40.86px] font-bold text-[#000000] sm:text-[30px] text-[20px] text-center sm:mb-[76px]">{{ title }}</h1>
            
            <ul v-for="item in menuItem" :key="item.id" class="max-[640px]:hidden w-auto h-auto leading-[21px]  text-center mb-[42.74px]">
                <li 
                    @click="handleActive(item.id)"
                    :class="{ 'tab-active': activeTab === item.id }"
                    class="w-full h-full font-bold text-[18px] leading-[24.52px] border-transparent border-b-2 hover:border-b-2 hover:text-[#AA6666] hover:border-b-[#AA6666] hover:cursor-pointer"
                >
                    {{ item.name }}
                </li>
            </ul>

            <div style="box-shadow: 0px 0px 6px 0px #00000040;" class="w-[50px] h-[50px] border rounded-[50%] sm:hidden mr-[18.84px]"></div>
        </nav>
        <div v-if="burgerActive" class="sm:hidden absolute top-[150px] w-full h-auto z-50 bg-white flex flex-col items-center">
                <ul v-for="item in menuItem" :key="item.id" class="w-[110px] h-full bg-white leading-[21px] text-center mb-[42.74px] flex flex-col">
                    <li 
                        @click="handleActive(item.id)"
                        :class="{ 'tab-active': activeTab === item.id }"
                        class="w-full h-full font-bold text-[18px] leading-[24.52px] border-transparent border-b-2 hover:border-b-2 hover:text-[#AA6666] hover:border-b-[#AA6666] hover:cursor-pointer"
                    >
                        {{ item.name }}
                    </li>
                </ul>
            </div>
    </header>
</template>

<style scoped>
    .header-shadow{
        box-shadow: 0px 4px 4px 0px #00000040;
    }

    .tab-active {
        @apply border-b-2 text-[#AA6666] border-b-[#AA6666]
    }
</style>