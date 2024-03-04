import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'm-react',
    entry: 'http://localhost:5555',
    activeRule: '/react',
    container: '#container',
    loader(loading) {
      console.log(loading, 'loading');
    }
  },
  {
    name: 'm-vue',
    entry: 'http://localhost:7777',
    activeRule: '/vue',
    container: '#container',
    loader() {
      console.log("来乐乐");
    }
  }
], {
  beforeLoad() {
    console.log('beforeLoad');
  },
  beforeMount() {
    console.log('beforeMount');
  }
  // ...
})
start()
