<template>
    <div id="treeDoms">
        <ul v-for="item in treeData" id="uls">
            <treeDomSon :option="theTree" :treeData="item"></treeDomSon>
        </ul>
    </div>
</template>

<script>
    import treeDomSon from '@/components/treeDomCom/treeDomCom'
    export default {
        name: 'treeDom',
        components: {
            treeDomSon
        },
        data () {
            return {
                // 样式可配置
                theTree: {
                    cssLi: {
                        color: '#fff',
                        width: '100px',
                        'font-size': '12px'
                    },
                    cssP: {
                        width: '100px',
                        border: '1px solid #fff',
                        'line-height': '30px',
                        'text-align': 'center',
                        margin: '0px 0px 5px 0px',
                        background: 'red'
                    }
                },
                treeData: [
                    {
                        name: '中国',
                        children: [
                            { 
                                name: '北京'
                            },
                            { 
                                name: '广东省',
                                children: [
                                    { name: '广州市' },
                                    { name: '韶关市' }
                                ]
                            },
                            { 
                                name: '海南省',
                                children: [
                                    {
                                        name: '海口市',
                                        children: [
                                            { name: '美兰区' },
                                            { name: '龙华区' },
                                            { name: '秀英区' },
                                            { name: '琼山区' }
                                        ]
                                    },
                                    {
                                        name: '三亚市'
                                    }
                                ]
                            },
                            {
                                name: '安徽省',
                                children: [
                                    { name: '合肥市' },
                                    { name: '安庆市' }
                                ]
                            },
                            {
                                name: 'UK',
                                children: [
                                    { name: '英格兰' },
                                    { name: '威尔士' }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style>
    #treeDoms {
        width: 400px;
        height: auto;
        background: #000;
        margin: 0 auto;
    }
</style>