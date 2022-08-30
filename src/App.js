import React from 'react'
import { useRoutes } from 'react-router-dom'
import WrapperRouter from './components/WrapperRouter.tsx'
import Index from './pages/index.tsx'

const App = () => {
  return useRoutes([
    {
      path: '/',
      element: <WrapperRouter element={Index} />
    }
  ])
}

export default App