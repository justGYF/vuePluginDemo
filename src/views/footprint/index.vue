<template>
    <div class="mapBox">
        <el-row style="width: 100%; height: 100%;">
            <el-col :span="12">
                <div class="cityChoose">
                    <el-checkbox border :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                    <div style="margin: 5px 0;"></div>
                    <el-checkbox-group v-model="selectCityData" @change="handleCheckedCitiesChange">
                        <el-checkbox  border v-for="city in cityData" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                    <el-button type="success" @click="submitData">提交足迹</el-button>
                </div>
            </el-col>
            <el-col :span="12" class="footprintMap">
                <Footprint :option="selectData"></Footprint>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Footprint from '../../components/footprintMap'
    const citys = [ '北京', '天津', '上海', '重庆', '河北', '山西', '辽宁', '吉林',
                '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北',
                '湖南', '广东', '海南', '四川', '贵州', '云南', '陕西', '甘肃', '青海',
                '台湾', '内蒙古', '广西', '西藏', '宁夏', '新疆', '香港', '澳门' ];
    export default {
        data () {
            return {
                cityData: citys,
                selectCityData: [],
                selectData: [],
                checkAll: false,
                isIndeterminate: true
            }
        },
        methods: {
            handleCheckAllChange (val) {
                this.selectCityData = val ? citys: [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange (value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cityData.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityData.length;
            },
            submitData () {
                this.selectData = [];
                this.selectData = this.selectCityData
            }
        },
        components: {
            Footprint
        }
    }
</script>

<style scoped>
    .mapBox {
        width: 100%;
        height: 100%;
    }
    .cityChoose {
        width: 80%;
        height: 200px;
        margin: 0 auto;
    }
    .cityChoose .el-checkbox-group .el-checkbox.is-bordered {
        margin: 0 0 10px 50px;
        width: 100px;
    }
    .footprintMap {
        background: -webkit-gradient(linear, 0 0, 0 100%, from(#1F313F), to(#5889AA));
        height: 100%;
    }
</style>