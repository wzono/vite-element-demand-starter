import 'element-plus/lib/theme-chalk/index.css';
// import what you need.
import { 
  ElCard,
  ElButton,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus';

// 
const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]

const components = [
  ElCard,
  ElButton,
]

export const setupElement = (app, options = {}) => {

  // global register components
  components.forEach(component => {
    app.component(component.name, component)
  })

  // use element-plus services
  plugins.forEach(plugin => {
    app.use(plugin)
  })

  // set global options
  app.config.globalProperties.$ELEMENT = options;
}