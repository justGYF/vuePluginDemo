<template>
    <div @click="mouseClick"> {{message}} </div>
</template>

<script>
    export default {
        name: 'mouse',
        data () {
            return {
                message: 0,
                num: 0,
                timer: ""
            }
        },
        methods: {
            // 函数节流式处理
            mouseClick () {
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.message ++;
                    this.num = 0;
                }, 1000)
            }
        }
    }
</script>

<style>
    div {
        width: 200px;
        height: 50px;
        background: blue;
        margin: 50px auto;
        cursor: pointer;
        color: white;
        line-height: 50px;
        text-align: center;
    }
</style>