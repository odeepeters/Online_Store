import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import { CartProvider } from './context/CartContext'
// import { Root } from 'postcss'

ReactDOM.createRoot(Document.getElementById('root')).render(
<BrowserRouter>
<SnackbarProvider>
<CartProvider>
<App />
</CartProvider>
</SnackbarProvider>
</BrowserRouter>
)


