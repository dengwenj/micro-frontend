import { BrowserRouter, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to='/react'>react 应用</Link>
        <Link to='/vue'>vue 应用</Link>
      </BrowserRouter>

      <div id='container'></div>
    </div>
  );
}

export default App;
