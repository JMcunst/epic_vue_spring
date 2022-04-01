<template>
<div class="imageupload">
    <div class="container col-sm-5 mb-16"></div>
<div>
    <div v-if="images" class="w-full h-full flex items-center">
        <!-- <img :src="images" alt="image"> -->
        <v-alert type="success">hellow</v-alert>
    </div>
    <div v-else
        class="justify-center cursor-pointer hover:bg-pink-100"
        @click="clickInputTag()">
        <input ref="image" id="input"
            type="file" name="image" accept="image/*" multiple="multiple"
            class="hidden"
            @change="imageUpload()">
        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </div>
</div>
</div>
</template>

<script>
import { reactive } from "vue";
import axios from 'axios';
import '../assets/css/style.css'

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
            let form = new FormData()
            let image = this.$refs['image'].files[0]

            form.append('image', image)

            axios.post('/upload', form, {
                header: { 'Content-Type': 'multipart/form-data' }
            }).then( ({data}) => {
                this.images = data
            })
            .catch( err => console.log(err))
        }
        const clickInputTag = () => {
            this.$refs['image'].click()
        }
        return {
            imageUpload,
            clickInputTag,
            state
        }
    }
};

</script>