import { createRouter, createWebHistory } from 'vue-router'

// Vistas principales
import HomeView from './views/HomeView.vue'
import RegisterView from './views/RegisterView.vue'
import LoginView from './views/LoginView.vue'

// Vistas adicionales
import StudentsView from './views/StudentsView.vue'
import CoursesView from './views/CoursesView.vue'
import TeachersView from './views/TeachersView.vue'
import WorkloadsView from './views/WorkloadsView.vue'
import InscriptionsView from './views/InscriptionsView.vue'
import AnnouncementsView from './views/AnnouncementsView.vue'
import GradesView from './views/GradesView.vue'
import YearCoursesView from './views/YearCoursesView.vue'
import ProxysView from './views/ProxysView.vue'
import UsersView from './views/UsersView.vue'
import ProfileView from './views/ProfileView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/register', component: RegisterView },
  { path: '/login', component: LoginView },
  { path: '/students', component: StudentsView },
  { path: '/courses', component: CoursesView },
  { path: '/teachers', component: TeachersView },
  { path: '/workloads', component: WorkloadsView },
  { path: '/inscriptions', component: InscriptionsView },
  { path: '/announcements', component: AnnouncementsView },
  { path: '/grades', component: GradesView },
  { path: '/yearcourses', component: YearCoursesView },
  { path: '/proxys', component: ProxysView },
  { path: '/users', component: UsersView },
  { path: '/profile', component: ProfileView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
