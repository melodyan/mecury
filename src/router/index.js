/*
    导出路由配置
 */
import Vue from 'vue'
import Router from 'vue-router'
import constantRoutes from './constantRoutes'
Vue.use(Router)





const createRouter = () => new Router({
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher // 重置路由
}
export default router
