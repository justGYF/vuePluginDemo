<template>
    <div id="sliders">
        <div class="sliderBox" :style="boxStyle">
            <Slider :option='sliderData'></Slider>
        </div>
    </div>
</template>

<script>
    import  One from '@/assets/image/1.jpg'
    import  Two from '@/assets/image/2.jpg'
    import  Three from '@/assets/image/3.jpg'
    import  Four from '@/assets/image/4.jpg'
    import  Five from '@/assets/image/5.jpg'
    import  Slider from '@/components/sliderLR/sliderLR'
    export default {
        data () {
            return {
                message: '',
                sliderData: {
                    width: 400,
                    height: 400,
                    moveTime: 0.6,
                    data: [One, Two, Three, Four, Five]
                }
            }
        },
        computed: {
            boxStyle () {
                return {
                    width: this.sliderData.width + 'px',
                    height: this.sliderData.height + 'px',
                }
            }
        },
        methods: {
        },
        mounted () {
        },
        components: {
            Slider
        }
    }
</script>

<style>
    .sliderBox {
        margin: 30px auto;
    }
</style>