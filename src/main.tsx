// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './styles/index.css';
import { SidebarProvider } from './contexts/SidebarContext.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { initRequest } from './services/initRequest.ts';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store.ts';

initRequest();

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
  // </StrictMode>,
)
