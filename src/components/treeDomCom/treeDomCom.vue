<template>
    <div id="treeDomSon">
        <ul id="uls">
            <li>
                <p>中国</p>
                <ul>
                    <li><p>北京</p></li>
                    <li><p>广东省</p>
                        <ul>
                            <li><p>广州市</p></li>
                            <li><p>韶关市</p></li>
                        </ul>
                    </li>
                    <li><p>海南省</p>
                        <ul>
                            <li><p>海口市</p>
                                <ul>
                                    <li><p>美兰区</p></li>
                                    <li><p>龙华区</p></li>
                                    <li><p>秀英区</p></li>
                                    <li><p>琼山区</p></li>
                                </ul>
                            </li>
                            <li><p>三亚市</p></li>
                        </ul>
                    </li>
                    <li><p>安徽省</p>
                        <ul>
                            <li><p>合肥市</p></li>
                            <li><p>安庆市</p></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><p>UK</p>
                <ul>
                    <li><p>英格兰</p></li>
                    <li><p>威尔士</p></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'treeDomSon',
        props: ['option'],
        data () {
            return {
            }
        },
        mounted () {
            this.active();
            this.styleLi();
        },
        methods: {
            active () {
                for (var i = 0; i < $('li').length; i++) {
                    $('li').eq(i).attr('status', 'true');
                }
                for (var i = 0; i < $('p').length; i++) {
                    $('p').eq(i).attr('type', 'isP');
                }
                $('#uls').on('click', function (e) {
                    var e = e || window.event;
                    if ($(e.target).attr('type') === 'isP') {
                        if ($(e.target).parent().attr('status') === 'true') {
                            $(e.target).parent().attr('status', false);
                            $(e.target).parent().children('ul').addClass('aa');              
                        } else {
                            $(e.target).parent().attr('status', true);
                            $(e.target).parent().children('ul').removeClass('aa');
                        }
                    }
                })                
            },
            styleLi () {
                if (this.option.cssLi) {
                    $('li').css(this.option.cssLi);
                } else {
                    return 0;
                }
                if (this.option.cssP) {
                    $('p').css(this.option.cssP);
                    if (this.option.cssP['line-height']) {
                        var heights = parseInt(this.option.cssP['line-height']) / 2
                        console.log(heights)
                        console.log(this.option.cssP['margin'])
                    }
                    // 选取不到伪类元素
                    $('li::before').css({
                        height: heights + 'px'
                    })
                } else {
                    return 0;
                }
            }
        }
    }
</script>

<style scoped>
    html, body {
        margin: 0;
        padding: 0;
    }
    ul {
        margin: 0;
    }
    li {
        width: 200px;
        list-style: none;
        position: relative;
    }
    li p {
        width: 100px;
        margin: 0;
    }
    /* L 形线条 */
    li::before {
        content: '';
        width: 10px;
        height: 20px;
        border-style:none none solid solid;
        border-width: 1px;
        position: absolute;
        top: -5px;
        left: -10px;
    }
    /* 竖线 */ 
    li:not(:last-child)::after {
        position: absolute;
        content: '';
        top: 0;
        left: -10px;
        bottom: 0;
        border-style: none none none solid;
        border-width: 1px;
    }
    .aa {
        height: 0px;
        overflow: hidden;
        transition: all 2s;
    }
</style>