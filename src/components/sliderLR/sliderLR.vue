<template>
    <div id="slider">
        <div class="sliderDiv" :style="boxStyle">
            <ul :style="ulStyle" 
                @mousedown="mouseDown" 
                @mouseup="mouseUp" 
                @mouseout="mouseOut">
                <li v-for="item in option.data" 
                    :style="liStyle">
                    <img :src="item" alt="">
                </li>
             </ul>
        </div>
        <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: 'slider',
        props: ['option'],
        data () {
            return {
                message: '',
                clientNum: 0,
                upFlag: '',
                ulMarginLeft: 0,
                minLeft: this.option.width,
                maxLeft: this.option.width * (this.option.data.length - 1)
            }
        },
        computed: {
            boxStyle () {
                let objs = this.whJudge(this.option);
                return {
                    width: objs.width,
                    height: objs.height
                }
            },
            liStyle () {
                return {
                    width: this.option.width + 'px',
                    height: this.option.height + 'px',
                    lineHeight: this.option.height + 'px'
                }
            },
            ulStyle () {
                return {
                    width: this.option.width * this.option.data.length + 'px',
                    height: this.option.height + 'px',
                    marginLeft: this.ulMarginLeft + 'px',
                    transition: 'all ' + this.option.moveTime + 's'
                }
            } 
        },
        watch: {
            'option' () {
            }
        },
        methods: {
            // 判断是否有宽高
            whJudge (obj) {
                let widthNum = '';
                let heightNum = '';
                if (!obj.width) {
                    widthNum = '100%';
                } else {
                    widthNum = obj.width + 'px'
                }
                if (!obj.height) {
                    heightNum = '100%';
                } else {
                    heightNum = obj.height + 'px'
                }
                let objs = {};
                objs.width = widthNum;
                objs.height = heightNum;
                return objs;
            },
            // 判断滑动边界
            sliderJudge (str) {
                if (str === 'left') {
                    if (Math.abs(this.ulMarginLeft - this.minLeft) > this.maxLeft) {
                        this.message = '不能往左滑啦'
                    } else {
                        this.ulMarginLeft -= this.minLeft
                        this.message = '左滑'
                    }
                } else if (str === 'right') {
                    if (this.ulMarginLeft + this.minLeft > 0) {
                        this.message = '不能往右滑啦'
                    } else {
                        this.ulMarginLeft += this.minLeft
                        this.message = '右滑'
                    }
                }
            },
            mouseDown (e) {
                // 拖动img元素会有阴影，属于默认行为，preventDefault取消默认行为
                e.preventDefault()
                this.clientNum = e.clientX
                this.upFlag = 'ok';
            },
            mouseUp (e) {
                this.clientNum = e.clientX - this.clientNum;
                this.upFlag = 'error';
                if (this.clientNum > 0) {
                    this.sliderJudge('right')
                } else if (this.clientNum < 0) {
                    this.sliderJudge('left')
                } else {
                    this.message = '没滑，哈哈哈哈';
                }
            },
            mouseOut (e) {
                if (this.upFlag === 'ok') {
                    this.clientNum = e.clientX - this.clientNum;
                    if (this.clientNum > 0) {
                        this.sliderJudge('right')
                    } else if (this.clientNum < 0) {
                        this.sliderJudge('left')
                    } else {
                        this.message = '没滑，哈哈哈哈';
                    }
                    this.upFlag = 'error'  
                }
            }
        }
    }
</script>

<style>
    #slider {
        width: 100%;
        height: 100%;
    }
    .sliderDiv {
        position: relative;
        border: 1px solid green;
        padding: 0;
        overflow: hidden;
    }
    .sliderDiv ul {
        list-style: none;
        padding: 0;
        margin: 0;
        transition: all 3s;
    }
    .sliderDiv ul li {
        float: left;
        text-align: center;
        background: rgba(123, 231, 23, .5);
    }
    .sliderDiv ul li img {
        width: 100%;
        height: 100%;
    }
</style>