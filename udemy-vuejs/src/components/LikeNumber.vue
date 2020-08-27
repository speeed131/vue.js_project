
<template>
    <div>
        <p>
            いいね({{halfNumber}})
        </p>
        <button @click="increment"> +1</button>
    </div>
</template>

<script>
export default { 
    //これが受け口
    props: ['totalNumber'],

    computed: {
        halfNumber() {
            return this.totalNumber /2;
        }
    },
    methods: {
        increment() {
            // this.totalNumber += 1;
            //これが送り口
            this.$emit('my-click', this.totalNumber + 1);
        }
    }
};
</script>


<style scoped>
    div {
        border: 1px solid red;
    }
</style>