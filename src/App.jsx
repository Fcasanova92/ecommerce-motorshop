import { Router } from '@/routes/Router'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <CartProvider>
      <Router />
      <ToastContainer />
    </CartProvider>
  )
}

export default App
