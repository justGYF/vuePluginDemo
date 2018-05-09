import Hello from '@/components/Hello'
import EchartsDemo from '../views/echarts/echartsDemo.vue'
import TreeDom from '../views/treeDom/treeDom.vue'
import Slider from '../views/slider/slider.vue'
import Calendar from '../views/calendar/index.vue'
import TransferTree from '../views/transferTree/index.vue'

const allRouter = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/slider',
        name: 'Slider',
        component: Slider
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
    },
    {
        path: '/',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/echartsDemo',
        name: 'EchartsDemo',
        component: EchartsDemo
    },
    {
        path: '/treeDom',
        name: 'treeDom',
        component: TreeDom
    },
    {
        path: '/transferTree',
        name: 'TransferTree',
        component: TransferTree
    }
]

  export { allRouter }
