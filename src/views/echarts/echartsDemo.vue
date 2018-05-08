<template>
    <div id="fat">
        <button @click="dataChange">change</button>
        <div id="echarts" ref="demo"></div>
    </div>
</template>

<script>
    import { buildEcharts } from '../../components/echartsTest/buildEcharts'
    export default {
        name: 'echarts',
        data () {
            return {
                echartsData: [
                    [{ name: 'AAA', value: '6' },
                    { name: 'BBB', value: '3' },
                    { name: 'CCC', value: '5' },
                    { name: 'DDD', value: '9' },
                    { name: 'EEE', value: '1' },
                    { name: 'FFF', value: '2' },
                    { name: 'GGG', value: '5' },
                    { name: 'HHH', value: '7' },
                    { name: 'III', value: '6' },
                    { name: 'JJJ', value: '3' }],

                    [{ name: 'AAA', value: '5' },
                    { name: 'BBB', value: '2' },
                    { name: 'CCC', value: '2' },
                    { name: 'DDD', value: '3' },
                    { name: 'EEE', value: '9' },
                    { name: 'FFF', value: '8' },
                    { name: 'GGG', value: '2' },
                    { name: 'HHH', value: '4' },
                    { name: 'III', value: '7' },
                    { name: 'JJJ', value: '3' }],

                    [{ name: 'AAA', value: '3' },
                    { name: 'BBB', value: '1' },
                    { name: 'CCC', value: '7' },
                    { name: 'DDD', value: '3' },
                    { name: 'EEE', value: '8' },
                    { name: 'FFF', value: '5' },
                    { name: 'GGG', value: '9' },
                    { name: 'HHH', value: '8' },
                    { name: 'III', value: '1' },
                    { name: 'JJJ', value: '9' }],
                ]
            }
        },
        methods: {
            dataChange () {
                let num = Math.floor(Math.random()*3);
                let op = buildEcharts(this.echartsData[num]);
                this.Ec.setOption(op);
            }
        },
        mounted () {
            this.Ec = this.$echarts.init(this.$refs.demo);
            this.dataChange();
        }
    }
</script>

<style>
    #fat {
        width: 1000px;
        height: 500px;
    }
    #echarts {
        width: 800px;
        height: 400px;
    }
</style>