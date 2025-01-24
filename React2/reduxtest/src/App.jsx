import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider, useSelector } from "react-redux";

import './App.css'
import appStore from './utils/appstore';
import { useSelector,Provider } from "react-redux";

function App() {
  const [count, setCount] = useState(0)

  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems)

  return (
    <Provider store={appStore}>
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    </Provider>
  )
}

export default App
