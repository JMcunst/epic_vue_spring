<template>
<div class="imageupload">
<div class="w-32 h-32 border-2 border-dotted border-blue-500">
    <div v-if="images" class="w-full h-full flex items-center">
        <img :src="images" alt="image">
    </div>
<div v-else
    class="w-full h-full flex items-center justify-center cursor-pointer hover:bg-pink-100"
    @click="clickInputTag()">
    <input ref="image" id="input"
        type="file" name="image" accept="image/*" multiple="multiple"
        class="hidden"
        @change="uploadImage()">
    <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
</div>
</div>
</div>
</template>

<script>
import { reactive } from "vue";

export default {
    
    //eslint-disable-next-line
    name: 'ImageUpload',
    components: {
    },
    props:{
        title: String
    },
    setup() {
        const state = reactive({
            username: '',
            password: ''
        })

        const imageUpload = () => {
            // method logic
        }
        return {
            imageUpload,
            state
        }
    }
};

</script>