// import 'nprogress/css/nprogress.css'; // 进度条样式
import { App } from 'vue';
// import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// import { createRouterGuards } from './router-guards';

// import outsideLayout from './outsideLayout';
import { whiteNameList } from './constant';
// import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

// import demosPyf from '@/router/staticModules/demosPyf';
// import rtParams from '@/router/staticModules/rtParams';
// import { t } from '@/hooks/useI18n';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    // redirect: '/about',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index.vue'),

    meta: {
      title: '首页',
    },
    children: [],
  },

  {
    path: '/testTabs2',
    name: 'testTabs2',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/viewsShare/tabs/testTabsInBootStrap.vue'),
    meta: {
      title: 'testTabs2',
    },
    children: [],
  },
  {
    path: '/downloadFile',
    name: 'downloadFile',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/tools/downloadFile.vue'),
    meta: {
      title: '下载文件',
    },
    children: [],
  },
  {
    path: '/IndexIframe',
    name: 'index',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },

  {
    path: '/QxUserRoleRelationCRUD',
    name: 'QxUserRoleRelationCRUD',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(
        /* webpackChunkName: "layout" */ '@/viewsShare/UserManage_GP/QxUserRoleRelationCRUD.vue'
      ),
    meta: {
      title: '用户角色关系',
    },
    children: [],
  },
  {
    path: '/IndexIframe',
    name: 'IndexIframe',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/GPIndexIframe.vue'),
    meta: {
      title: '用户中心',
    },
    children: [],
  },
  // Layout之外的路由

  // ...demosPyf,
  // ...rtParams,
  // Layout之外的路由
];
export const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes,
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route: any) => {
    const { name } = route;
    if (name && !whiteNameList.some((n) => n === name)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}
export async function setupRouter(app: App) {
  // 创建路由守卫
  // createRouterGuards(router, whiteNameList);

  app.use(router);
  // console.log(router);
  // 路由准备就绪后挂载APP实例
  await router.isReady();
}
export default router;
