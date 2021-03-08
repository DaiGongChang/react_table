import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index',
      routes:[
        {path: '/', component: '@/index'},
        {path: '/users', component: '@/pages/users/TodoList.js'},
        {path: '/tables', component: '@/pages/tables/table.js'}
      ]
    },
    
  ],
  fastRefresh: {},
});
