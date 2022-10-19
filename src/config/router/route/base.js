export default [

  {
    path: '/my-page1',
    name: 'my-page1',
    meta: {
      title: 'my-page1',
    },
    component: () => import(/* webpackChunkName: "my-page1" */'@/page/my-page1.vue'),
  },
  {
    path: '/my-page2',
    name: 'my-page2',
    meta: {
      title: 'my-page2',
    },
    component: () => import(/* webpackChunkName: "my-page2" */'@/page/my-page2.vue'),
  },
  {
    path: '/my-page3',
    name: 'my-page3',
    meta: {
      title: 'my-page3',
    },
    component: () => import(/* webpackChunkName: "my-page3" */'@/page/my-page3.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
    },
    component: () => import(/* webpackChunkName: "page-404" */'@/page/page-404.vue'),
  },
];
