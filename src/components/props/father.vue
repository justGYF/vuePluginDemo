<template>
    <div id="father" @click.stop="fatherClick"> 
        {{ content }} 
        <Son :isSonShow="fatherContral" @sonChange="changeResult"></Son>
    </div>
</template>

<script>
    import Son from './son'
    export default {
        name: 'father',
        data () {
            return {
                content: 'AAAAAAAAA',
                fatherContral: false
            }
        },
        components: {
            Son
        },
        methods: {
            fatherClick () {
                this.fatherContral = true;
            },
            changeResult (val) {
                this.fatherContral = val;
            }
        }
    }
</script>

<style>
    #father {
        width: 200px;
        height: 200px;
        border: 2px dashed #ccc;
        cursor: pointer;
        margin: 0 auto;
    }
</style>