<template>
    <div>
        <TransferTree :option="obj"></TransferTree>
    </div>
</template>
<script>
    import TransferTree from '@/components/transfer-tree'
    export default {
        data () {
            return {
                datas: [
                    {
                        name: 'A',
                        id: '1',
                        domain: '',
                        sub: [
                            { name: 'a', id: '1', domain: 'a' },
                            { name: 'b', id: '2', domain: 'b' },
                            { name: 'c', id: '3', domain: 'c' },
                            { name: 'd', id: '4', domain: 'd' },
                            { name: 'e', id: '5', domain: 'e' },
                            { name: 'f', id: '6', domain: 'f' }
                        ]
                    },
                    {
                        name: 'B',
                        id: '2',
                        domain: '',
                        sub: [
                            { name: 'a', id: '7', domain: 'a' },
                            { name: 'b', id: '8', domain: 'b' },
                            { name: 'c', id: '9', domain: 'c' },
                            { name: 'd', id: '10', domain: 'd' },
                            { name: 'e', id: '11', domain: 'e' },
                            { name: 'f', id: '12', domain: 'f' }
                        ]
                    }
                ],
                obj: {
                    data: []
                }
            }
        },
        mounted () {
            this.obj.data = this.datas;
        },
        components: {
            TransferTree
        }
    }
</script>
<style scoped>
</style>