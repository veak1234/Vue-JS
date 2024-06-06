import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ListCategory from '@/views/Category/List.vue';
import CreateCategory from '@/views/Category/Create.vue';
import EditCategory from '@/views/Category/Update.vue';
import ShowCategory from '@/views/Category/Show.vue';
import ProductList from '@/views/product/List.vue';
import CreateProduct from '@/views/product/Create.vue';
import EditProduct from '@/views/product/Edit.vue';
import ShowProduct from '@/views/product/Show.vue';
import DiscountList from '@/views/discount/List.vue';
import CreateDiscount from '@/views/discount/Create.vue';
import EditDiscount from '@/views/discount/Edit.vue';
import ShowDiscount from '@/views/discount/Show.vue';
import StudentList from '@/views/student/List.vue';
import StudentCreate from '@/views/student/Create.vue';
import EditStudent from '@/views/student/Edit.vue';
import ShowStudent from '@/views/student/Show.vue';
import OrderList from '@/views/order/List.vue';
import UsersList from '@/views/users/List.vue';
import ApiList from '@/views/Api/List.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/categories',
    name: 'categories',
    component: ListCategory
  },
  {
    path: '/categories/create',
    name: 'create-category',
    component: CreateCategory
  },
  {
    path: '/categories/edit/:id',
    name: 'edit-category',
    component: EditCategory,
    props: true
  },
  {
    path: '/categories/show/:id',
    name: 'show-category',
    component: ShowCategory,
    props: true
  },
  {
    path: '/products',
    name: 'products',
    component: ProductList
  },
  {
    path: '/products/create',
    name: 'create-product',
    component: CreateProduct
  },
  {
    path: '/products/edit/:id',
    name: 'edit-product',
    component: EditProduct,
    props: true
  },
  {
    path: '/products/show/:id',
    name: 'show-product',
    component: ShowProduct,
    props: true
  },
  {
    path: '/discounts',
    name: 'discounts', // Change to kebab-case
    component: DiscountList
  },
  {
    path: '/discounts/create',
    name: 'create-discount', // Change to kebab-case
    component: CreateDiscount
  },
  {
    path: '/discounts/edit/:id',
    name: 'edit-discount', // Change to kebab-case
    component: EditDiscount,
    props: true
  },
  {
    path: '/discounts/show/:id',
    name: 'show-discount',
    component: ShowDiscount,
    props: true
  },
  {
    path: '/students',
    name:'students',
    component: StudentList
  },
  {
    path: '/students/create',
    name:'student-create',
    component: StudentCreate
  },
  {
    path: '/students/edit/:id',
    name:'edit-student',
    component: EditStudent,
    props: true
  },
  {
    path: '/students/show/:id',
    name:'show-student',
    component: ShowStudent,
    props: true
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrderList
  },
  {
    path: '/user',
    name: 'user',
    component: UsersList
  },
  {
    path: '/apis',
    name: 'apis',
    component: ApiList
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'bg-danger text-white border-bottom',
})

export default router;