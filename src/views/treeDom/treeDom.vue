<template>
    <div id="treeDoms">
        <treeDomSon :option="theTree"></treeDomSon>
    </div>
</template>

<script>
    import treeDomSon from '../../components/treeDomCom/treeDomCom'
    export default {
        name: 'treeDom',
        components: {
            treeDomSon
        },
        data () {
            return {
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
                        margin: '0px 0px 5px 0px'
                    }
                }
            }
        }
    }
</script>

<style>
    #treeDoms {
        width: 400px;
        height: auto;
        background: #000;
    }
</style>