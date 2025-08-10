import React, { type ErrorInfo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import DialogError from './ui/DialogError';

/*
- show fallback UI-friendly with user instead of show blank page
- don't block other function
- easy to developer tracking, maintaine where bug cause
- help to monitor bug cause, and developer fix withot wait user report
*/

function ErrorBoundaryComponent({ children }: React.PropsWithChildren) {

  const logError = (error: Error, info: ErrorInfo) => {
    const bodyData = {
      user: 'tony',
      dateTime: new Date().toUTCString(),
      os: (navigator as any).userAgentData.platform,
      info,
      messageError: error.message,
      location: window.location.href
    }
    // make a request api
   console.log('logError: ', bodyData)
  };

  function FallbackUI() {
   
    return (
      <DialogError/>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={FallbackUI}
      onError={logError}
    >
      {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaryComponent