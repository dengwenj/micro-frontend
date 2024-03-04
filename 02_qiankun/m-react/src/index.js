import './public'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let root
function render(props) {
  const { container } = props
  root = ReactDOM.createRoot(
    container ? document.querySelector('#container') : document.getElementById('root')
  );
  root.render(
    <App />
  ); 
}

// 自己运行
if (!window.__POWERED_BY_QIANKUN__) {
  render({}) 
}

export async function bootstrap(props) {
  console.log(props, 'bootstrap');
}

export async function mount(props) {
  console.log(props, 'mount');
  render(props)
}

export async function unmount(props) {
  root.unmount()
}
