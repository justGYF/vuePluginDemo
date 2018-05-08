<template>
    <div class="bigBox">
        <div class="left" @click="nextOrBefore(0)">
            上一月
        </div>
        <div class="right" @click="nextOrBefore(1)">
            下一月
        </div>
        <div class="center">
            <div class="title">
                <p class="titleYear">{{dateTitle}}</p>
                <p class="titleWeek">{{dateWeek}}</p>
            </div>
            <ul class="box">
                <p class="week" v-for="item in title">{{item}}</p>
                <li @click="showClickDay(index)"
                    v-for="(item, index) in days"
                    :class="{
                        'days': true,
                        'high': index - empty === new Date().getDate(),
                        'highLess': index === clickIndex
                    }"
                >{{item}}</li>
            </ul>   
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                // 标题
                dateTitle: '',
                dateWeek: '',
                // 保存点击的下标
                clickIndex: '',
                title: ['Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                week: [7, 1, 2, 3, 4, 5, 6],
                // 保存年月日, 星期
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: new Date().getDate(),
                days: [],
                // 空白占位数量索引最大值，由0开始
                empty: 0
            }
        },
        created () {
        },
        mounted () {
            // 打印本月的日历
            this.printMonth(this.year, this.month, 1);
            // 显示标题
            this.showTitle();
        },
        methods: {
            // 显示标题的日期
            showTitle () {
                this.dateTitle = `${this.year} 年 ${this.month + 1} 月 ${this.day} 日`;
                let week = this.getWeek(this.year, this.month, this.day)
                this.dateWeek = `${this.title[week - 1]}`;
            },
            // 判断月 / 年的变化
            statusChange (month) {
                if (month > 11) {
                    this.month = 0;
                    this.year += 1;
                } else if (month < 0) {
                    this.month = 11;
                    this.year -= 1;
                }
            },
            // 上 / 下 一月
            nextOrBefore (flag) {
                this.day = new Date().getDate();
                if (flag === 0) {
                    this.month -= 1;
                } else {
                    this.month += 1;
                }
                this.statusChange(this.month);
                this.printMonth(this.year, this.month, 1);
                this.showTitle();
            },
            // 显示点击的某一天
            showClickDay (val) {
                if (this.days[val] === ' ') {
                    // this.clickIndex = ''
                } else {
                    this.clickIndex = val;
                    // 保存日期
                    this.day = this.days[val];
                    this.showTitle();
                }
            },
            // 判断是否为闰年
            isLeep (year) {
                return (year % 100 !== 0 && year % 4 === 0) || (year % 400 == 0)
            },
            // 判断当前月份有多少天
            dayNum (year, month) {
                let num;
                if ([4, 6, 9, 11].includes(month - 0 + 1)) {
                    num = 30
                } else if ([1, 3, 5, 7, 8, 10, 12].includes(month - 0 + 1)) {
                    num = 31
                } else if ([2].includes(month - 0 + 1) && this.isLeep(year)) {
                    num = 29;
                } else {
                    num = 28
                }
                return num;
            },
            // 判断当前月的n号为星期几
            getWeek (year, month, day) {
                let d = new Date();
                d.setFullYear(year);
                d.setMonth(month);
                d.setDate(day);
                return this.week[d.getDay()];
            },
            // 打印本月的月历
            printMonth (year, month, day) {
                this.days = [];
                let week = this.getWeek(year, month, day);
                // empty = week - 2 代表下标0之前为空白占位数量索引最大值，由0开始
                // index - empty 代表下标 例：-2, -1, 0, 1, 2
                this.empty = week - 2;
                let num = this.dayNum(year, month);
                for (let i = 1; i < num + 1; i++) {
                    this.days.push(i);
                }
                for (let i = 0; i < week - 1; i++) {
                    this.days.unshift(' ');
                }
            }
        }
    }
</script>

<style>
    .bigBox {
        width: 650px;
        height: 300px;
        margin: 20px auto;
    }
    .left {
        width: 50px;
        height: 300px;
        margin: 0 10px 0 30px;
        float: left;
        line-height: 300px;
    }
    .right {
        width: 50px;
        height: 300px;
        margin: 0 30px 0 10px;
        float: right;
        line-height: 300px;
    }
    .center {
        height: 300px;
        overflow: hidden;
        margin: 0 auto;
    }
    .title {
        width: 100%;
        height: 30px;
        overflow: hidden;
    }
    .title .titleYear {
        float: left;
        width: auto;
        height: 30px;
        line-height: 30px;
        margin: 0;
        padding-left: 21px;
    }
    .title .titleWeek {
        float: right;
        width: auto;
        height: 30px;
        line-height: 30px;
        margin: 0;
        padding-right: 23px;
    }
    .box {
        width: 100%;
        height: 250px;
        list-style: none;
        margin: -20px 1%;
        overflow: hidden;
        /* ul会有40px的默认padding */
        padding-left: 0;
        cursor: pointer;
    }
    .week {
        width: 14%;
        height: 30px;
        float: left;
        text-align: center;
        line-height: 30px;
    }
    .days {
        width: 14%;
        height: 30px;
        float: left;
        text-align: center;
        line-height: 30px;
        margin-top: 2px;
        /*background-color: rgba(0, 0, 0, .3); */
    }
    .high {
        background-color: rgba(39, 72, 188, .6);
        color: #fff;
    }
    .highLess {
        background-color: rgba(0, 0, 0, .3);
        color: #fff;
    }
</style>