import Create from '../pages/Create.vue';
import Comments from '../pages/Comments.vue';
import Login from '../pages/Login.vue';

const routes = [

  {
    path: '/',
    name: 'Comments',
    component: Comments,
  },
  
  {
    path: '/Create',
    name: 'Create',
    component: Create,
  },


  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },

];

export default routes;
