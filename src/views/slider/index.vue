<template>
    <div id="sliders">
        <div class="sliderBox">
            <Slider :option='sliderData'></Slider>
        </div>
    </div>
</template>

<script>
    import  One from '../../assets/image/1.jpg'
    import  Two from '../../assets/image/2.jpg'
    import  Three from '../../assets/image/3.jpg'
    import  Four from '../../assets/image/4.jpg'
    import  Five from '../../assets/image/5.jpg'
    import  Slider from '../../components/sliderLR/sliderLR'
    export default {
        data () {
            return {
                message: '',
                sliderData: {
                    width: 200,
                    height: 200,
                    moveTime: 0.6,
                    data: [One, Two, Three, Four, Five]
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
        width: 200px;
        height: 200px;
        margin: 30px auto;
    }
</style>