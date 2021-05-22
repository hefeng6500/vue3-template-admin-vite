import { App } from 'vue'
import {
  locale,
  ElButton
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

export default (app: App) => {
  locale(lang)

  // 组件列表
  const components = [
    ElButton,
  ]

  components.forEach(component => {
    app.component(component.name, component)
  })

  // 全局配置
  app.config.globalProperties.$ELEMENT = {
    size: 'medium'
  }
}