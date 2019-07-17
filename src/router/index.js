import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    // hidden: true,
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'form' }
    }]
  },

  // {
  //   path: '/main',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'mian',
  //       component: () => import('@/views/main/index'),
  //       meta: { title: '首页', icon: 'form' }
  //     }
  //   ]
  // },

  {
    path: '/monitoring',
    component: Layout,
    redirect: '/monitoring/terminal',
    name: 'Monitoring',
    meta: { title: '监控管理', icon: 'example' },
    children: [
      {
        path: 'terminal',
        name: 'Terminal',
        component: () => import('@/views/terminal/index'),
        meta: { title: '终端管理', icon: 'table' }
      },
      {
        path: 'terminal_detail',
        name: 'Terminal_Detail',
        component: () => import('@/views/terminal_detail/index'),
        hidden: true,
        meta: { title: '终端详情' }
      },
      {
        path: 'adhibition',
        name: 'Adhibition',
        component: () => import('@/views/adhibition/index'),
        meta: { title: '应用分布', icon: 'tree' }
      }
    ]
  },

  {
    path: '/app4distribution',
    component: Layout,
    redirect: '/App4distribution/task_management',
    name: 'App4distribution',
    meta: { title: '应用分布', icon: 'example' },
    children: [
      {
        path: 'task_management',
        name: 'Task_Management',
        component: () => import('@/views/task_management/index'),
        meta: { title: '任务管理', icon: 'table' }
      },
      {
        path: 'add_task',
        name: 'Add_Task',
        component: () => import('@/views/add_task/index'),
        hidden: true,
        meta: { title: '添加任务' }
      },
      {
        path: 'app4list',
        name: 'App4List',
        component: () => import('@/views/app4list/index'),
        meta: { title: '应用列表', icon: 'tree' }
      },
      {
        path: 'app4group',
        name: 'App4group',
        component: () => import('@/views/app4group/index'),
        meta: { title: '应用分组配置', icon: 'tree' }
      }
    ]
  },

  {
    path: '/warning_management',
    component: Layout,
    redirect: '/Warning_management/warning_message',
    name: 'Warning_management',
    meta: { title: '告警管理', icon: 'example' },
    children: [
      {
        path: 'warning_message',
        name: 'Warning_message',
        component: () => import('@/views/warning_message/index'),
        meta: { title: '告警信息', icon: 'table' }
      },
      {
        path: 'warnning_parameters',
        name: 'Warnning_parameters',
        component: () => import('@/views/warnning_parameters/index'),
        meta: { title: '预警参数', icon: 'tree' }
      }
    ]
  },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: '菜单1',icon: 'nested' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: '菜单1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: '菜单1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: '菜单1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: '菜单1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: '菜单1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: '菜单2' }
  //     }
  //   ]
  // },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
