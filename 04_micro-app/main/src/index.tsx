import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import microApp from '@micro-zoe/micro-app'

/**
 * 1. 对于我们的 micro-app 他里面的核心是创建一个 webcomponent 组件
 * 2、获取 html，将模版放到 webComponent 中
 * 3、css 做作用域隔离，js 做 proxy 沙箱
 * 4、执行完毕后应用可以正常挂载
 */
microApp.start()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
