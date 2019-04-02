import Nav from '@/views/nav'
// import EchartsDemo from '@/views/echarts'
// import TreeDom from '@/views/treeDom'
// import Slider from '@/views/slider'
// import Calendar from '@/views/calendar'
// import TransferTree from '@/views/transferTree'
// import Footprint from '@/views/footprint'

const allRouter = [
    {
        path: '/slider',
        name: 'Slider',
        component: () => import('@/views/slider')
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('@/views/calendar')
    },
    {
        path: '/',
        name: 'Nav',
        component: Nav
    },
    {
        path: '/echartsDemo',
        name: 'EchartsDemo',
        component: () => import('@/views/echarts')
    },
    {
        path: '/treeDom',
        name: 'treeDom',
        component: () => import('@/views/treeDom')
    },
    {
        path: '/transferTree',
        name: 'TransferTree',
        component: () => import('@/views/transferTree')
    },
    {
        path: '/footprint',
        name: 'Footprint',
        component: () => import('@/views/footprint')
    }
]

  export { allRouter }
