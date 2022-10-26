import Vue from 'vue'
import App from './App.vue'
import { Button,Container,Header,Main,
  Aside,Menu,Submenu,MenuItem,MenuItemGroup,
  Icon,Dropdown,DropdownMenu,DropdownItem,
  Card,Row,Col,Table,TableColumn,Breadcrumb,BreadcrumbItem,
  Tag,Dialog,Form,FormItem,Option,Select,Input,DatePicker,TimePicker

} from 'element-ui';

import router from './router'
import store from '@/store'

//引入mockServe文件,让咱们模拟接口跑起来
import "@/mock/mockServe.js";

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Icon)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Select)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(TimePicker)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
