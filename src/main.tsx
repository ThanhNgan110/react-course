// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './styles/index.css';
import { SidebarProvider } from './contexts/SidebarContext.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { initRequest } from './services/initRequest.ts';
import { BrowserRouter } from 'react-router';

initRequest();

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  // </StrictMode>,
)
