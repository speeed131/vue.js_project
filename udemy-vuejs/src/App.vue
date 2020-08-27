<template>
    <div>
        <LikeHeader></LikeHeader>
        <h2>{{number}}</h2>
        <LikeNumber :total-number="number" v-on:my-click="increamentNumber"></LikeNumber>
        <LikeNumber :total-number="number"></LikeNumber>
    </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";



export default {
    
    data() {
        return {
            number: 10
        }
    },
    components: {
        LikeHeader,
    },
    methods: {
        increamentNumber(value){
            this.number = value;
        }
    }
}
</script>




<style scoped>
    div {
        border: 1px solid blue;
    }
</style>