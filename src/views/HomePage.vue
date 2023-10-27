<script setup>
  import { ref } from "vue";
  import GlobalHeader from "../components/GlobalHeader.vue";
  import HomeBanner from "../components/HomeBanner.vue";
  import HomeParagraphs from "../components/HomeParagraphs.vue";

  const menuItem = ref([
    {
      id: 1,
      name: "白頭翁的特性"
    },
    {
      id: 2,
      name: "白頭翁的美照"
    },
    {
      id: 3,
      name: "白頭翁的故事"
    },
    {
      id: 4,
      name: "白頭翁的危機"
    },
  ]);

  const infoItem = ref([
    {
      id: 1,
      title: "外觀",
      info: "白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。"
    },
    {
      id: 2,
      title: "棲地",
      info: "白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。"
    },
    {
      id: 3,
      title: "食性",
      info: "以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。"
    },
  ])
  const activeTab = ref(1)

  const sideBarTitle = ref("白頭翁不吃小米")
  const bannerTitle = ref("白頭翁 (Chinese bulbul)");
  const bannerSubtitle = ref("又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。")  

  const handleActive = (val) => {
    console.log(val);
    activeTab.value = val
  }

  const burgerActive = ref(false)
  const handleBurgerMenu = () => {
    console.log("yaya");
    burgerActive.value = !burgerActive.value
  }

</script>

<template>
  <main class="flex flex-col main sm:!grid w-[100vw] h-[100vh] sm:!grid-rows-3">
    <GlobalHeader 
      class="col-span-1 row-span-3"
      :active-tab="activeTab"
      @handle-active="handleActive" 
      :title="sideBarTitle" 
      :menu-item="menuItem" 
      @handle-burger-menu="handleBurgerMenu"
      :burger-active="burgerActive"
    />
    <HomeBanner :title="bannerTitle" :subtitle="bannerSubtitle" class="col-start-2 col-end-4 row-span-2"/>
    <HomeParagraphs :info-item="infoItem" class="col-start-2 col-end-4 row-span-1"/>
</main>

</template>

<style scoped>
  .main {
    grid-template-columns: 345px 1fr 1fr;
  }
</style>
