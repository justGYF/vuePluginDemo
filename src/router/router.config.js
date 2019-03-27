import Nav from '@/views/nav'
import EchartsDemo from '@/views/echarts'
import TreeDom from '@/views/treeDom'
import Slider from '@/views/slider'
import Calendar from '@/views/calendar'
import TransferTree from '@/views/transferTree'
import Footprint from '@/views/footprint'

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
        name: 'Nav',
        component: Nav
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
    },
    {
        path: '/footprint',
        name: 'Footprint',
        component: Footprint
    }
]

  export { allRouter }
