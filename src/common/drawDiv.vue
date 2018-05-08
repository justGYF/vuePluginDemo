<template>
    <div :style="boxStyle">
        <ul>
            <li v-for="(item, index) in option.liStyle.arr" @click.stop="changeColor(index)"
             :style="{color: item.color}"> {{ item.con }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'divs',
        props: ['option'],
        data () {
            return {
                liStyle: {
                    arr: [
                        {con: '', color: ''}
                    ]
                },
                height: {
                    type: Number,
                    default: 100
                },
                width: {
                    type: Number,
                    default: 100
                },
                background: {
                    type: String,
                    default: "red"
                }
            }
        },
        computed: {
            boxStyle () {
                return {
                    height: this.option.height + 'px',
                    width: this.option.width + 'px',  
                    background: this.option.background
                }
            }
        },
        methods: {
            uls () {
                this.liStyle.arr = this.option.liStyle.arr;
            },
            changeColor (index) {
                this.$emit('changeColor', index)
            }
        },
        mounted () {
            this.uls();
        }
    }
</script>

<style>
    
</style>