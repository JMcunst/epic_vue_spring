<template>
    <div class="home">
        <img alt='Vue logo' src='../assets/logo.png'/>
        <HelloWorld msg="welcome to your vue.js app"/>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    //eslint-disable-next-line
    name: 'Home',
    components: {
        HelloWorld
    },
};
</script>