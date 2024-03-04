import { createApp } from 'vue'
import App from './App.vue'

let app: any
function render(props: any) {
  const { container } = props
  app = createApp(App)
  app.mount(container ? document.querySelector('#container')! : '#app')
}

// 自己运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({}) 
}

export async function bootstrap(props: any) {
  console.log(props, 'bootstrap') 
}

export async function mount(props: any) {
  console.log(props, 'mount');
}

export async function unmount(props: any) {
  console.log(props, 'unmount')
  app.unmount()
}