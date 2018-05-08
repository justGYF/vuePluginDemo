import Hello from '@/components/Hello'
import Father from '@/components/props/father'
import EchartsDemo from '../views/echarts/echartsDemo.vue'
import Use from '@/components/forCommon/use.vue'
import MouseClick from '@/components/mouseClick/mouseClick.vue'
import TreeDom from '../views/treeDom/treeDom.vue'
import Slider from '../views/slider/slider.vue'
import Calendar from '../views/calendar/index.vue'

const allRouter = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/Slider',
        name: 'Slider',
        component: Slider
    },
    {
        path: '/Calendar',
        name: 'Calendar',
        component: Calendar
    },
    {
        path: '/',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/father',
        name: 'Father',
        component: Father
    },
    {
        path: '/echartsDemo',
        name: 'EchartsDemo',
        component: EchartsDemo
    },
    {
        path: '/use',
        name: 'Use',
        component: Use
    },
    {
        path: '/mouse',
        name: 'mouseClick',
        component: MouseClick
    }, 
    {
        path: '/treeDom',
        name: 'treeDom',
        component: TreeDom
    }
]

  export { allRouter }
