<script setup>

    
    let projectList =[
        {
            name: '4evermore Web Application',
            img: '/4evermoreimg.png',
            description: 'Full stack e-commerce web application for a jewelry company using in Sveltekit, PocketBase, Stripe API, and deployed on Vercel using Github actions.',
            url: 'https://4evermore.us',
        },
        {
            name: 'Jacob Sulecki Portfolio',
            img: '/jacobsulecki.png',
            description: 'My personal portfolio website built using Vue.js and Tailwind CSS. This is the website you are currently on!',
            url: 'https://jacobsulecki.com',
        },
    ]


</script>


<template>
    <h1 class=" text-4xl sm:text-6xl text-center pb-5">Projects</h1>
    <p class=" text-sm text-gray-600 text-center pb-5">Here is a list of projects that I have been working on. Please check back soon as I am updating regularly!</p>
    <div class=" flex m-8 rounded-md shadow-lg hover:ring-4 ring-purple-500 ring-opacity-80 sm:gap-8 gap-0 sm:flex-row flex-col items-center" v-for="(item) in projectList">
        <a :href='item.url' class=" flex flex-col sm:flex-row items-center">
            <img class=" sm:rounded-tl-md sm:rounded-bl-md w-[50%] h-auto object-contain pt-8 sm:pt-0" :src='item.img'>
            <div class="flex flex-col text-center w-full pb-8 justify-center"> 
                <h1 class=" text-1xl sm:text-2xl  pt-8 font-semibold">{{ item.name }}</h1>
                <p class=" text-left text-xs sm:text-sm sm:w-[80%] w-[60%] self-center">{{ item.description }}</p>
            </div>
        </a>
    </div>
</template>

<style scoped> 

</style>