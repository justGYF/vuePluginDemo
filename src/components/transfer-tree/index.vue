<template lang="html">
      <!-- 查看任务弹框 -->
      <div class="ga-newTransfer">
            <el-row>
                <el-col :span="11">
                    <div class="ga-newTransfer__tree">
                        <el-input v-model="filterTextLeft"
                                  icon="search"
                                  placeholder="请输入域名查询"
                                  auto-complete="on"
                                  :style = "widthStyle"></el-input>
                        <el-tree class="ga-newTransfer__treeLeft"
                            ref="lefttree"
                            :data="leftTreeData"
                            show-checkbox
                            node-key="id"
                            :filter-node-method="filterNode"
                            :default-expanded-keys="expandedKeys"
                            @check-change="handleCheckChangeLeft"
                            @node-click="nodeLeftClick"
                            :props="defaultProps">
                        </el-tree>
                    </div>
                </el-col>
                <el-col :span="2">
                    <div class="ga-newTransfer__choose">
                        <el-button
                            type="primary"
                            size="small"
                            @click.native="addToRight"
                            :disabled="leftChecked.length === 0">
                            <i class="el-icon-arrow-right"></i>
                        </el-button>
                        <el-button
                            type="primary"
                            size="small"
                            @click.native="addToLeft"
                            :disabled="rightChecked.length === 0">
                            <i class="el-icon-arrow-left"></i>
                        </el-button>
                    </div>
                </el-col>
                <el-col :span="11">
                    <div class="ga-newTransfer__tree">
                        <el-input v-model="filterTextRight"
                                      icon="search"
                                      placeholder="请输入域名查询"
                                      auto-complete="on"
                                      :style = "widthStyle"></el-input>
                        <el-tree class="ga-newTransfer__treeRight"
                                ref="righttree"
                                :data="rightTreeData"
                                show-checkbox
                                node-key="id"
                                :filter-node-method="filterNodeRight"
                                :default-expanded-keys="expandedKeys"
                                :props="defaultProps"
                                @check-change="handleCheckChangeRight"
                                @node-click="nodeRightClick">
                        </el-tree>
                    </div>
                    <div class="ga-newTransfer__check">
                            <el-checkbox v-model="checked" :indeterminate="isIndeterminate">{{checkMessage}}</el-checkbox>
                    </div>
                </el-col>
            </el-row>
      </div>
</template>

<script>
import 'lodash';
import 'postcss-bem/index.js';
export default {
    props: ['option'],
    data() {
        return {
            // checkbox状态
            checked: false,
            isIndeterminate: false,
            checkMessage: '已选 0 / 0 项',

            // 左右勾选数据集合
            rightChecked: [],
            leftChecked: [],

            // 左右过滤字符
            filterTextLeft: '',
            filterTextRight: '',
            widthStyle: {
                width: '100%',
                marginTop: '10px'
            },

            // 树形数据 --- 映射到界面
            leftTreeData: [],
            rightTreeData: [],

            // 树形数据（过滤后 + 初始保存） --- 保存左侧一份完整的数据
            leftfilterData: [],
            leftCopyData: [],
            rightfilterData: [],
            rightCopyData: [],

            // 默认展开
            expandedKeys: [1, 2],
            defaultProps: {
                children: 'sub',
                label: 'name'
            }
        }
    },
    mounted() {},
    computed: {},
    methods: {
        // 加载信源树接口
        loadSourceTree(data) {
            // 强行要求数据格式
            /*
                    [
                        {
                            name: 'A',
                            id: '',
                            domian: '',
                            sub: [
                                {
                                    name: '1',
                                    id: '',
                                    domain: '',
                                    dataObj: {}
                                }
                                .......
                            ]
                        }
                        .......
                    ]
                 */
            this.leftTreeData = _.cloneDeep(data)
            this.leftCopyData = _.cloneDeep(data)
        },
        // getValue
        getValue() {
            return this.rightChecked
            // return this.rightTreeData
        },
        // 清除树状数据
        clearValue() {
            this.rightChecked.map(item => {
                this.$refs.righttree.setChecked(item, false)
            })
            this.rightChecked = []
            this.rightTreeData = []
        },
        // 去除最外层的数据
        deleteData(arr) {
            let arrs = []
            arr.map(item => {
                if (item.sub && item.sub.length !== 0) {
                } else {
                    arrs.push(item)
                }
            })
            return arrs
        },
        // 穿梭框相关函数 -- 过滤
        filterNode(value, data) {
            if (!value) return true
            if (data.label.indexOf(value) !== -1) {
                this.leftfilterData.push(data)
                return data
            }
        },
        filterNodeRight(value, data) {
            if (!value) return true
            if (data.label.indexOf(value) !== -1) {
                this.rightfilterData.push(data)
                return data
            }
        },
        // 节点点击事件
        nodeLeftClick(val) {
            if (this.leftChecked.includes(val)) {
                this.$refs.lefttree.setChecked(val, false)
            } else {
                this.$refs.lefttree.setChecked(val, true)
            }
        },
        nodeRightClick(val) {
            if (this.rightChecked.includes(val)) {
                this.$refs.righttree.setChecked(val, false)
            } else {
                this.$refs.righttree.setChecked(val, true)
            }
        },
        // 数组简化
        arrSplice(arr1, arr2) {
            let newArr = arr1
            arr1 = []
            for (let i = 0; i < newArr.length; i++) {
                let k = 0
                for (let j = 0; j < arr2.length; j++) {
                    if (newArr[i].id === arr2[j].id) {
                        k = 1
                    }
                }
                if (k === 0) {
                    arr1.push(newArr[i])
                }
            }
            return arr1
        },
        addToLeft() {
            // 右到左 -- 清除右边选中，左边的取消选中状态
            // 将原数组中勾选的数值删除, rightCopyData也要删
            let arr = this.$refs.righttree.getCheckedNodes()
            let newRightData = this.rightTreeData
            this.rightTreeData = []
            this.rightTreeData = this.arrSplice(newRightData, arr)
            // 右到左 -- 选中的清空
            this.rightChecked = []
            let newCopyData = this.rightCopyData
            this.rightCopyData = []
            this.rightCopyData = this.arrSplice(newCopyData, arr)
            // id为2出问题
            arr.forEach(item => {
                this.$refs.lefttree.setChecked(item, false)
            })
            this.checked = false
            this.rightTreeData.forEach(item => {
                this.$refs.righttree.setChecked(item, false)
            })
            this.checkMessage = `已选 0 / ${this.rightTreeData.length} 项`
        },
        addToRight() {
            // 左到右 -- 每次的左到右操作，都是右侧的整体变化
            this.rightTreeData = []
            let arr = this.$refs.lefttree.getCheckedNodes()
            this.rightTreeData = this.deleteData(arr)
            // 保留一份数据
            this.rightCopyData = this.deleteData(arr)
            this.checkMessage = `已选 0 / ${this.rightTreeData.length} 项`
        },
        // 左侧勾选
        handleCheckChangeLeft() {
            // 当输入不为空，即有过滤存在时，改变leftTreeData
            if (this.filterTextLeft !== '') {
                let arr = this.deleteData(this.leftfilterData)
                this.leftTreeData.forEach(item => {
                    let subs = []
                    for (let i = 0; i < item.sub.length; i++) {
                        let k = 0
                        for (let j = 0; j < arr.length; j++) {
                            if (item.sub[i].id === arr[j].id) {
                                k = 1
                            }
                        }
                        if (k === 1) {
                            subs.push(item.sub[i])
                        }
                    }
                    item.sub = []
                    item.sub = subs
                    return item
                })
            }
            // 控制左移按钮状态
            this.leftChecked = []
            this.leftChecked = this.$refs.lefttree.getCheckedNodes()
        },
        // 右侧勾选
        handleCheckChangeRight() {
            this.rightChecked = []
            this.rightChecked = this.$refs.righttree.getCheckedNodes()
            // 右侧选中，更改checkd状态
            this.checkMessage = `已选 ${this.rightChecked.length} / ${this.rightTreeData.length} 项`
            if (this.rightChecked.length === this.rightTreeData.length) {
                this.isIndeterminate = false
                this.checked = true
            } else if (this.rightChecked.length === 0) {
                this.isIndeterminate = false
                this.checked = false
            } else {
                this.isIndeterminate = true
            }
        }
    },
    watch: {
        'option.data'(val) {
            this.loadSourceTree(val)
        },
        // 左侧过滤
        filterTextLeft(val) {
            // 先重置过滤数组
            this.leftfilterData = []
            // 退回到无输入状态，恢复leftTreeData
            if (val === '') {
                this.leftTreeData = []
                this.leftTreeData = _.cloneDeep(this.leftCopyData)
                // 获取右侧所有节点，并在左侧对应勾选
                let arr = this.deleteData(this.leftChecked)
                // 延迟渲染？？？
                setTimeout(() => {
                    arr.forEach(item => {
                        this.$refs.lefttree.setChecked(item, true)
                    })
                }, 0)
            }
            this.$refs.lefttree.filter(val)
        },
        // 右侧过滤
        filterTextRight(val) {
            // 先重置过滤数组
            this.rightfilterData = []
            this.$refs.righttree.filter(val)
            // 过滤条件不同，不同的赋值
            if (val === '') {
                this.rightTreeData = []
                this.rightTreeData = this.rightCopyData
            } else {
                this.rightTreeData = []
                this.rightTreeData = this.rightfilterData
            }
            this.rightChecked = this.$refs.righttree.getCheckedNodes()
            this.checkMessage = `已选 ${this.rightChecked.length} / ${this.rightTreeData.length} 项`
        },
        checked(val) {
            // 选中时，选中右侧所有数据选中时，选中右侧所有数据
            if (val === true) {
                this.rightTreeData.forEach(item => {
                    this.$refs.righttree.setChecked(item, true)
                })
                this.checkMessage = `已选 ${this.rightTreeData.length} / ${
                    this.rightTreeData.length
                } 项`
            } else {
                this.rightTreeData.forEach(item => {
                    this.$refs.righttree.setChecked(item, false)
                })
                this.checkMessage = `已选 0 / ${this.rightTreeData.length} 项`
            }
        }
    }
}
</script>

<style scoped>
.ga-newTransfer {
    width: 100%;
    height: 100%;
}
.ga-newTransfer__tree {
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(11, 36, 95, 0.12), 0 0 6px rgba(11, 36, 95, 04);
    position: relative;
    padding: 10px 4%;
}
.ga-newTransfer__treeLeft {
    height:210px;
    margin-top: 10px;
    overflow: auto;
}
.ga-newTransfer__treeRight {
    height:180px;
    margin-top: 10px;
    overflow: auto;
}
.ga-newTransfer__check {
    width: 100%;
    height: 30px;
    padding: 0 0 0 21px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 4px rgba(11, 36, 95, 0.12), 0 0 6px rgba(11, 36, 95, 04);
}
.ga-newTransfer__choose {
    display: flex;
    height: 258px;
    justify-content: center;
    align-content: center;
    flex-flow: column;
    width: 50px;
    margin: 10px auto;
}
button:last-child {
        margin-top: 10px;
        width: 50px;
    }
.el-button + .el-button {
    margin-left: 0 !important;
}
</style>
