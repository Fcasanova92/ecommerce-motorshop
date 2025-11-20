import { Router } from '@/routes/Router'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router'


function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Router />
            <ToastContainer />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App
