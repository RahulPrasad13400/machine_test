import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import HomePage from "./pages/HomePage"
import ProductDetail from "./pages/ProductDetail"
import Error from "./ui/Error"
import ProductCategory from "./pages/ProductCategory"

const router = createBrowserRouter([
  {
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path : '/',
        element : <HomePage />
      },
      {
        path : '/product/:id',
        element : <ProductDetail />
      },
      {
        path : '/products/category/:category',
        element : <ProductCategory />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
