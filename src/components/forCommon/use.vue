<template>
    <DrawDiv :option="useDiv" @changeColor="changeWhat"></DrawDiv>
</template>

<script>
    import DrawDiv from '../../common/drawDiv'
    export default {
        name: 'use',
        components: {
            DrawDiv
        },
        data () {
            return {
                useDiv: {
                    width: 300,
                    height: 300,
                    background: 'blue',
                    liStyle: {
                        arr: [
                            {con: 'aa', color: 'red'},
                            {con: 'bb', color: 'black'},
                            {con: 'cc', color: 'green'},
                            {con: 'dd', color: 'pink'},
                            {con: 'ee', color: 'red'}
                        ]
                    }
                }
            }
        },
        methods: {
            changeWhat (val) {
                this.useDiv.liStyle.arr[val].color = '#FFF'
            }
        }
    }    
</script>

<style>
    
</style>