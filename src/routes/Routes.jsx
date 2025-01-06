import { createBrowserRouter } from 'react-router-dom'
import Main from '../Main/Main'
// import Home from '../pages/Home'
import Banner from '../pages/Banner'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Banner/>
      }
    ]
  }
])
