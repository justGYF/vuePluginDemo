<template>
    <div id="son" v-show="sonShow" @click.stop="childContral"> {{ content }} </div>
</template>

<script>
    export default {
        name: 'son',
        props: [
            'isSonShow'
        ],
        data () {
            return {
                content: 'BBBBBBBB',
                sonShow: this.isSonShow
            }
        },
        methods: {
            childContral () {
                this.sonShow = false
            }
        },
        watch: {
            isSonShow (val) {
                this.sonShow = val;
            },
            sonShow (val) {
                if (val === false) {
                    this.$emit('sonChange', val);
                }
            }
        }
    }
</script>

<style>
    #son {
        width: 100px;
        height: 100px;
        border: 2px dashed #000;
        cursor: pointer;
        margin: 25px auto;
    }
</style>