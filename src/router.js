import VueRouter from 'vue-router';
import Auth from './components/Auth.vue';
import Timeline from './components/Timeline.vue';
import Project from './components/Project.vue';
import MyPage from './components/MyPage.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Auth },
    { path: '/auth', component: Auth },
    { path: '/timeline', component: Timeline },
    { path: '/mypage', name:'MyPage', component: MyPage },
    { path: '/project/:id', name:'Project', component: Project },
  ]
});
export default router;