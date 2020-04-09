/*
  所有的路由
 */
/**
 * constantRoutes
 * 存放所有的通用页面，即所有用户都可以访问到
 * @type {Array}
 */
const constantRoutes=[
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/',
        component: () => import('@/views/login/index'),
        hidden: true
    },
]


export default constantRoutes
