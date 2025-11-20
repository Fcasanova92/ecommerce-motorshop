import { Router } from '@/routes/Router'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router'


function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <Router />
              <ToastContainer />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App
