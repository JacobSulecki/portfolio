<script setup></script>

<template>
  <div>
    <div class="header flex flex-col items-center bg-purple-500 text-white h-[20vh] sm:h-[35vh]">
      <h1 class=" text-4xl font-bold pt-[10vh] sm:text-7xl">Jacob Sulecki</h1>
      <h3 class="text-1xl sm:text-2xl">Software Engineer</h3>
    </div>

    <div class="navbar">
      <nav class=" bg-purple-500 p-4 text-white flex justify-center gap-12 sm:gap-14">
        <router-link class="hover:font-medium" to="/about">About</router-link>
        <router-link class="hover:font-medium" to="/projects">Projects</router-link>
        <router-link class="hover:font-medium" to="/contact">Contact</router-link>
      </nav>
    </div>

    <div class="flex flex-col m-auto w-4/5  pt-[5vh] text-wrap ">
      <routerView></routerView>
    </div>
  </div>
</template>



