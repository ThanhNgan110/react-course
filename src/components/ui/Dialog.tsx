interface DialogProps extends React.PropsWithChildren {
  isOpen: boolean
}

function Dialog({ isOpen, children }: DialogProps) {

  if (!isOpen) return null;

  return (
    <div>
      {children}
    </div>
  )
}

export default Dialog