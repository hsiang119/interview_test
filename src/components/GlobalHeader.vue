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

    <header class="w-full sm:max-w-[345px] sm:h-[100vh] sm:py-[78px] header-shadow h-[87.74px] relative flex flex-col">

        <nav class="w-full sm:h-auto h-[87.74px] flex flex-row justify-between items-center sm:flex-col ">
            
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

            <h1 class="relative justify-center w-[auto] h-[27px] sm:h-[41px] leading-[27px] sm:leading-[40.86px] font-bold text-[#000000] sm:text-[30px] text-[20px] text-center sm:mb-[76px]">{{ title }}</h1>
            <div class="absolute top-[50px] left-[300px] z-50 sm:block hidden">
                <div class="desktop-bird ">
                    <div class="desktop-bird-body"></div>
                    <div class="desktop-bird-eye"></div>
                    <div class="desktop-bird-head "></div>
                    <div class="desktop-bird-beak-top"></div>
                    <div class="desktop-bird-beak-bottom"></div>
                    <div class="desktop-bird-eye-black"></div>            
                    <div class="desktop-bird-nose2"></div>         
                </div> 
            </div>
            
            <ul v-for="item in menuItem" :key="item.id" class="max-[640px]:hidden w-auto h-[21px] leading-[21px] text-center mb-[42.74px]">
                <li 
                    @click="handleActive(item.id)"
                    :class="{ 'tab-active': activeTab === item.id }"
                    class="w-full h-full font-bold text-[18px] leading-[24.52px] border-transparent border-b-2 hover:border-b-2 hover:text-[#AA6666] hover:border-b-[#AA6666] hover:cursor-pointer"
                >
                    {{ item.name }}
                </li>
            </ul>

            <div class="mobile bird sm:!hidden">
                <div class="bird-body"></div>
                <div class="bird-eye"></div>
                <div class="bird-head "></div>
                <div class="bird-nose1"></div>            
                <div class="bird-nose2"></div>            
                <div class="bird-beak-top"></div>
                <div class="bird-beak-bottom"></div>
            </div> 

        </nav>

    </header>
    
    

    <div v-show="burgerActive" class="sm:hidden w-full h-auto z-50 bg-white flex flex-col items-center">
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
</template>

<style scoped>
    .header-shadow{
        box-shadow: 0px 4px 4px 0px #00000040;
    }

    .tab-active {
        @apply border-b-2 text-[#AA6666] border-b-[#AA6666]
    }

    .bird {
        position: relative;
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 6px 0px #00000040;
        margin-right: 25px;
    }
    .desktop-bird {
        position: relative;
        width: 100px;
        height: 100px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 6px 0px #00000040;
    }



.bird-body {
    position: absolute;
    top: 25%;
    left: 18%;
    width: 70%;
    height: 60%;
    background-color: black;
    width: 30px;
    height: 24px;
    border-radius: 50% / 50%;
    rotate: -25deg;
}

.desktop-bird-body {
    position: absolute;
    top: 25%;
    left: 18%;
    width: 70%;
    height: 60%;
    background-color: black;
    width: 63px;
    height: 44px;
    border-radius: 50% / 50%;
    rotate: -28deg;
}



.bird-eye {
    position: absolute;
    top: 40%;
    right: 30%;
    width: 10%;
    height: 10%;
    background-color: black;
    border-radius: 50%;
    z-index: 8;
}

.desktop-bird-eye {
    position: absolute;
    top: 41%;
    right: 13%;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 0 0 10px 10px;
    z-index: 30;
}

.bird-head {
    position: absolute;
    top: 35%;
    left: 17%;
    width: 70%;
    height: 60%;
    background-color: white;
    width: 31px;
    height: 16px;
    border-radius: 50% / 50%;
    rotate: -18deg;
    z-index: 3;
}

.desktop-bird-head {
    position: absolute;
    top: 35%;
    left: 17%;
    width: 70%;
    height: 60%;
    background-color: white;
    width: 66px;
    height: 27px;
    border-radius: 50% / 50%;
    rotate: -21deg;
    z-index: 10;
}

.bird-beak-top {
    position: absolute;
    right: 15%;
    width: 10%;
    height: 10%;
    background-color: black;
    z-index: 5;
    border-radius: 50%;
    bottom: 52%;
}

.desktop-bird-beak-top {
    position: absolute;
    right: 13%;
    width: 10%;
    height: 10%;
    background-color: black;
    z-index: 20;
    border-radius: 50%;
    bottom: 56%;
}

.bird-nose1 {
    position: absolute;
    right: 21%;
    width: 11%;
    height: 7%;
    background-color: white;
    z-index: 11;
    border-radius: 50%/50%;
    top: 40%;
    rotate: 92deg;
}


.bird-nose2 {
    position: absolute;
    right: 9%;
    width: 15%;
    height: 7%;
    background-color: white;
    z-index: 11;
    top: 42%;
}

.desktop-bird-nose2 {
    position: absolute;
    width: 15px;
    height: 8px;
    border-radius: 50% / 50%;
    background-color: white;
    right: 18%;
    bottom: 55%;
    z-index: 35;
    rotate: 80deg;
}

.bird-beak-bottom {
    position: absolute;
    bottom: 26%;
    left: 19%;
    width: 36%;
    height: 8%;
    background-color: black;
    z-index: 5;
    border-bottom-right-radius: 30% 50%;
}

.desktop-bird-beak-bottom {
    position: absolute;
    bottom: 28%;
    left: 19%;
    width: 36%;
    height: 9%;
    background-color: black;
    border-bottom-right-radius: 30% 74%;
    z-index: 15;
}

.desktop-bird-eye-black {
    position: absolute;
    top: 40%;
    right: 40%;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
    z-index: 15;
}



</style>