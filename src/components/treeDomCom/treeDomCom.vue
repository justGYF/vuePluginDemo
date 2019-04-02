<template>
    <!-- 递归调用自身，树形组件 -->
    <li class="lis" status="true">
        <p @click.stop="changeHeight">{{treeData.name}}</p>
        <ul v-if="treeData.children && treeData.children.length">
            <!-- 在这里引用treeDomSon自身，完成递归操作 -->
          <treeDomSon :treeData="treeData" v-for="(treeData, i) of treeData.children" :key="i"></treeDomSon>
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'treeDomSon',
        props: {
            option: {
                type: Object,
                default: () => {}
            },
            treeData: {
                type: Object,
                default: () => {}
            }
        },
        data () {
            return {
            }
        },
        mounted () {
            // 因为递归, 循环执行mounted, option为undefined, 需做如此处理
            if (this.option) {
                this.styleLi();
            }
        },
        methods: {
            styleLi () {
                if (this.option.cssLi) {
                    $('#uls li').css(this.option.cssLi);
                } else {
                    return 0;
                }
                if (this.option.cssP) {
                    $('.lis p').css(this.option.cssP);
                    if (this.option.cssP['line-height']) {
                        var heights = parseInt(this.option.cssP['line-height']) / 2
                    }
                    // 选取不到伪类元素
                    $('.lis::before').css({
                        height: heights + 'px'
                    })
                } else {
                    return 0;
                }
            },

            // 点击折叠，展开 --- 原生方式操作dom
            // 因为不方便统一数据驱动处理 --- status的值
            changeHeight (e) {
                let uls = e.target.parentNode.getElementsByTagName('ul');
                if (e.target.parentNode.getAttribute('status') === 'true') {
                    e.target.parentNode.setAttribute('status', false)
                    for (let i = 0; i < uls.length; i++) {
                        uls.item(i).classList.add('aa')
                    }
                } else {
                    e.target.parentNode.setAttribute('status', true)
                    for (let i = 0; i < uls.length; i++) {
                        uls.item(i).classList.remove('aa')
                    }
                }
            }
        }
    }
</script>

<style scoped>
    ul {
        padding-left: 40px;
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