import type { RouteRecordRaw } from 'vue-router';
// import RouterView from '@/layout/routerView/index.vue';
// import { t } from '@/hooks/useI18n';

// const moduleName = 'demos';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/SimpleBottleGame',
    name: `SimpleBottleGame`,
    // redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: '漂流瓶测试',
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "demos-custom-a-custom-modal" */ '@/views/DriftingBottleGame/SimpleBottleGame.vue'
      ),
  },
];
export default routes;
