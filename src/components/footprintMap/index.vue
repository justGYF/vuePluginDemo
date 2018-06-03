<template>
    <div class="footprintMap" ref="fpMap">
        
    </div>
</template>

<script>
    import chinaMap from '../../assets/map/china.json'
    import axios from 'axios'
    const buildDatas = (dataCity) => {
        let option = {
            tooltip: {
                show: true,
                trigger: 'item'
            },
            series: [
                {
                    name: '',
                    type: 'map',
                    roam: true,
                    mapType: 'china',
                    itemStyle: {
                        //未选中状态
                        normal: {
                            borderWidth:1,
                            borderColor:'#fff',
                            areaColor: '#A1A1A1',
                            label: {
                                // 不显示省市名称
                                show: false
                            }
                        },
                        // 选中样式
                        emphasis: {
                            borderWidth:1,
                            areaColor: '#747134',
                            label: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                         }    
                    },
                    // 选中的城市
                    // 数据格式： { name, selected: true }
                    data: dataCity
                }
            ]
        }
        return option
    }
    export default {
        props: [ 'option' ],
        data () {
            return {

            }
        },
        watch: {
            option (val) {
                let arr = [];
                val.forEach(item => {
                    let obj = {}
                    obj.name = item;
                    obj.selected = true;
                    obj.itemStyle = {
                        emphasis: {
                            areaColor: '#F4E925'
                        }
                    }
                    arr.push(obj)
                })
                this.buildData(arr);
            }
        },
        mounted () {
            this.$echarts.registerMap('china', chinaMap);
            this.intMap();
            // 初始化地图
            this.buildData([])
        },
        methods: {
            intMap () {
                this.EC = this.$echarts.init(this.$refs.fpMap);
            },
            buildData (arr) {
                let op = buildDatas(arr);
                this.EC.setOption(op);
            }
        }
    }
</script>

<style scoped>
    .footprintMap {
        width: 100%;
        height: 100%;
    }
</style>